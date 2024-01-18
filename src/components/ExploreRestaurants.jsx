import PlacesCard from "./PlacesCard"
import { exploreRestaurantsState } from "../store/atoms"
import { useRecoilValue } from "recoil"

const ExploreRestaurants = () => {
  const exploreRestaurants = useRecoilValue(exploreRestaurantsState);

  return (
    <div>
      <div className='flex flex-col  mt-8 mb-8 w-4/5 mx-auto'>
        <h1 className='mb-4 title'>Explore Every Restaurants Near Me</h1>
        <div className='grid grid-cols-2'>
        {
          exploreRestaurants.map((item) => {
            return (
              <div key={item.text} className='border-solid border-2 border-gray rounded-lg w-100 mr-12 mb-4 h-12 flex items-center justify-center text-base font-normal text-zinc-950 opacity-75 font-Grotesque cursor-pointer' >{item.text}</div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default ExploreRestaurants