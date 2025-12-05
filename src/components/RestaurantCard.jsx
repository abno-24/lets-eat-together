import { CLOUDINARY_IMG_URL } from "../utils/constants";
import { Star } from 'lucide-react';

const RestaurantCard = ({ restaurants }) => {
  return (
    <>
      {
        restaurants.map((restaurant) => (
          <div key={restaurant?.info?.id} className="rounded-3xl h-[380px] pb-8 hover:cursor-pointer hover:scale-95 duration-100">
            {console.log(restaurant)}
            <div className="rest-card-img" style={{ backgroundImage: `url(${CLOUDINARY_IMG_URL + restaurant?.info?.cloudinaryImageId})` }}>
              {/* <img src={CLOUDINARY_IMG_URL + restaurant?.info?.cloudinaryImageId} alt={restaurant?.info?.name} className="h-full rounded-3xl" /> */}
            </div>
            <div className="ml-3 mt-2">
              <div className="my-1">
                <span className="text-lg font-semibold">{restaurant?.info?.name}</span>
                <div className="flex items-center gap-1 font-medium">
                  <Star className="-mt-1" fill="#2AA63E" stroke="#2AA63E" size={16} />
                  <span>{restaurant?.info?.avgRating}</span>
                  <span> • </span>
                  <span>{restaurant?.info?.sla?.slaString}</span>
                </div>
              </div>
              <div className="text-gray-700 text-md">
                <div className="text-nowrap overflow-hidden">{restaurant?.info?.cuisines.join(", ")}</div>
                <div>{restaurant?.info?.locality}</div>
              </div>
            </div>
          </div >
        ))
      }
    </>
  )
}

export default RestaurantCard