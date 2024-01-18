import { DishesTypesImageLink } from '../utils/config'

const DishesTypesCards = ({imgLink}) => {
    return (
        <div>
            <img src={DishesTypesImageLink+imgLink} alt="dish" className='w-80 h-auto ml-4 mr-4 cursor-pointer' />
        </div>
    )
}

export default DishesTypesCards;