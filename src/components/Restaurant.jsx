import { useEffect, useState } from "react"
import { SWIGGY_RESTAURANT_API } from "@/utils/constants";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

const Restaurant = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const fetchRestaurantData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetch(`${SWIGGY_RESTAURANT_API}${id}`, {
        headers: {
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "User-Agent": "Mozilla/5.0",
        },
      });
      
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      const text = await data.text();
      console.log(text);


      // const json = await data.json();
      // console.log(json);

    } catch (error) {
      console.error("Failed to fetch restaurant:", error);
      setError("Failed to load restaurant data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchRestaurantData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default Restaurant