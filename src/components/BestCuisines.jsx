import PlacesCard from "./PlacesCard"
import { useRecoilValue } from "recoil"
import { bestCuisinesState } from "../store/atoms"

const BestCuisines = () => {
  const bestCuisine = useRecoilValue(bestCuisinesState);

  return (
    <div>
      <div className='flex flex-col mt-8 mb-8 w-4/5 mx-auto'>
        <h1 className='mb-4 title'>Best Cuisines Near Me</h1>
        <div className='grid grid-cols-4'>
          {
            bestCuisine.map((item) => {
              return (
                <PlacesCard key={item.text} text={item.text} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default BestCuisines;