import { useEffect, useState } from "react"
import { SWIGGY_API } from "../utils/constants";
import { Grid } from 'react-loader-spinner'
import RestaurantCard from "./RestaurantCard";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const RestaurantContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
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

      setRestaurants(restaurantList);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
      setError("Failed to load restaurant data. Please try again.");
      setRestaurants([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-100px)]">
        <Grid
          visible={isLoading}
          height="80"
          width="80"
          color="#79716B"
          ariaLabel="grid-loading"
        />
      </div>
    );
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
          <div className="flex gap-2 w-3/12">
            <Input type="text" placeholder="Search restaurants" className="" />
            <Button type="submit" variant="outline" className="bg-red-600 hover:bg-red-700 hover:text-white text-white font-semibold cursor-pointer">
              Search
            </Button>
          </div>
        </div>
        <div className="my-8 grid grid-cols-4 gap-8">
          <RestaurantCard restaurants={restaurants} />
        </div>
      </div>
    )
}

export default RestaurantContainer