import TopRestaurantsCard from "./TopRestaurantsCard"
import { useRecoilValue } from "recoil"
import { restaurantsOnlineState } from "../store/atoms"

const RestaurantsOnline = () => {
  const restaurantsOnline = useRecoilValue(restaurantsOnlineState);

  return (
    <div>
      <div className='flex flex-col mt-8 mb-8 w-4/5 mx-auto'>
        <div className="flex flex-row justify-between">
          <h1 className='mb-4 title'>Restaurants with online food delivery</h1>
        </div>
        <div className='grid grid-cols-4'>
          {
            restaurantsOnline.map((item) => {
              return (
                <TopRestaurantsCard key={item.info.id} id={item.info.id} name={item.info.name} imgLink={item.info.cloudinaryImageId} rating={item.info.avgRating} cuisines={item.info.cuisines} locality={item.info.locality} time={item.info.sla.deliveryTime} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default RestaurantsOnline