import DishesTypesCards from './DishesTypesCards'
import { useRecoilValue } from 'recoil'
import { dishesTypesState } from '../store/atoms'

const DishesTypes = () => {
    const dishesTypes=useRecoilValue(dishesTypesState)
    
    return (
            <div className='flex flex-col mt-8 mb-8 w-4/5 mx-auto'>
                <div className='flex flex-row justify-between'>
                    <h2 className='title'>What's on your mind?</h2>
                    <div className='div'></div>
                </div>
                <div className='flex flex-row overflow-x-auto whitespace-nowrap scrollbar-hide'>
                {dishesTypes.map((item)=> {
                    return(
                    <DishesTypesCards key={item.id} imgLink={item.imageId}/>
                    )
                })}
                </div>
            </div>
    )
}

export default DishesTypes;