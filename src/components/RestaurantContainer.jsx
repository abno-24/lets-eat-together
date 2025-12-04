import { useEffect, useState } from "react"
import { SWIGGY_API } from "../utils/constants";
import { Grid } from 'react-loader-spinner'
import RestaurantCard from "./RestaurantCard";

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
      <div className="flex justify-center items-center h-96">
        <Grid
          visible={isLoading}
          height="80"
          width="80"
          color="#FF6647"
          ariaLabel="grid-loading"
        />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-600 p-4 text-center">Error: {error}</div>;
  }

  if (restaurants.length === 0) {
    return <h1>No restaurants found!</h1>
  }

  return (
    <div className="my-8 grid grid-cols-4 gap-8 rounded-md">
      <RestaurantCard restaurants={restaurants} />
    </div>
  )
}

export default RestaurantContainer