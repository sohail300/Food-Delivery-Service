import TopRestaurantsCard from "./TopRestaurantsCard";
import { useRecoilValue } from "recoil";
import { topRestaurantsState } from "../store/atoms";

const TopRestaurants = () => {
    const topRestaurants = useRecoilValue(topRestaurantsState);

    return (
            <div className='flex flex-col mt-8 mb-8 w-4/5 mx-auto'>
                <div className='flex flex-row justify-between'>
                    <h1 className='mb-4 title'>Top restaurant chains</h1>
                    <div></div>
                </div>
                <div className="flex flex-row overflow-auto whitespace-nowrap scrollbar-hide">
                    {
                        topRestaurants.map((item) => {
                            return (
                                <TopRestaurantsCard key={item.info.id} id={item.info.id} name={item.info.name} imgLink={item.info.cloudinaryImageId} rating={item.info.avgRating} cuisines={item.info.cuisines} locality={item.info.locality} time={item.info.sla.deliveryTime} />
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default TopRestaurants;