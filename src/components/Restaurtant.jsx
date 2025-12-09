import { SWIGGY_RESTAURANT_API } from "@/utils/constants";
import { useEffect, useState } from "react"
import Loader from "./Loader";

const Restaurtant = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRestaurantData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetch(SWIGGY_RESTAURANT_API);
      console.log(data);

      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      const json = await data.json();
      console.log(json.data);

    } catch (error) {
      console.error("Failed to fetch restaurant:", error);
      setError("Failed to load restaurant data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  if (error) {
    return <div className="text-red-600 p-4 text-center">Error: {error}</div>;
  }

  return (
    <div>Restaurtant</div>
  )
}

export default Restaurtant