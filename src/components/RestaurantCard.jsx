import { CLOUDINARY_IMG_URL } from "../utils/constants";
import { Star } from 'lucide-react';

const RestaurantCard = ({ restaurants }) => {
  return (
    <>
      {
        restaurants.map((restaurant) => (
          <div key={restaurant?.info?.id} className="rounded-2xl h-[380px] hover:cursor-pointer hover:scale-95 duration-100">
            {/* {console.log(restaurant)} */}
            <div className="relative rest-card-img" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 10%, transparent 60%), url(${CLOUDINARY_IMG_URL + restaurant?.info?.cloudinaryImageId})` }}>
              <h2 className="absolute bottom-2 left-3 text-white text-2xl uppercase font-bold">
                {restaurant?.info?.aggregatedDiscountInfoV3?.header} {restaurant?.info?.aggregatedDiscountInfoV3?.subHeader}
              </h2>
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
                <div className="text-nowrap overflow-hidden">
                  {
                    restaurant?.info?.cuisines.length > 4 ?
                      `${restaurant?.info?.cuisines.slice(0, 4).join(", ")}...` : restaurant?.info?.cuisines.join(", ")
                  }
                </div>
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