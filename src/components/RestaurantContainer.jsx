import { useEffect, useState } from "react"
import { SWIGGY_API } from "../utils/constants";
import { Grid } from 'react-loader-spinner'
import RestaurantCard from "./RestaurantCard";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Loader from "./Loader";

const RestaurantContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetch(SWIGGY_API);
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      const json = await data.json();
      const restaurantList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      const filteredRestaurantsList = restaurantList;

      setRestaurants(restaurantList);
      setFilteredRestaurants(filteredRestaurantsList);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
      setError("Failed to load restaurants data. Please try again.");
      setRestaurants([]);
      setFilteredRestaurants([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  if (error) {
    return <div className="text-red-600 p-4 text-center">Error: {error}</div>;
  }

  return restaurants.length === 0 ?
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <h1 className="text-3xl font-bold">Oops... No restaurants found! 🤕</h1>
    </div> :
    (
      <div className="my-8">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Restaurants with online food delivery in Mumbai</h2>
          <div className=" w-3/12 flex gap-2">
            <Input
              type="text"
              placeholder="Search restaurants"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const filteredList = restaurants.filter((restaurant) =>
                    restaurant.info.name.toLowerCase().includes(search.toLowerCase())
                  );
                  setFilteredRestaurants(filteredList);
                }
              }}
            />
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 hover:text-white text-white font-semibold cursor-pointer"
              onClick={() => {
                const filteredList = restaurants.filter((restaurant) =>
                  restaurant.info.name.toLowerCase().includes(search.toLowerCase())
                );
                setFilteredRestaurants(filteredList);
              }}
            >
              Search
            </Button>
          </div>
        </div>
        <div className="my-8 grid grid-cols-4 gap-8">
          <RestaurantCard restaurants={filteredRestaurants} />
        </div>
      </div>
    )
}

export default RestaurantContainer