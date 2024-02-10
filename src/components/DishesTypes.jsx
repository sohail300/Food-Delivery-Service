import DishesTypesCards from './DishesTypesCards'
import { useRecoilValue } from 'recoil'
import { dishesTypesState } from '../store/atoms'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const DishesTypes = () => {
    const dishesTypes = useRecoilValue(dishesTypesState);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <div className='flex flex-col mt-8 mb-8 w-4/5 mx-auto'>
            <div className='flex flex-row justify-between'>
                <h2 className='title'>What's on your mind?</h2>
            </div>
            <div className=''>
                <Carousel responsive={responsive} className="pb-8" swipeable={true}
                    draggable={true} infinite={true}
                    autoPlay={true} autoPlaySpeed={4000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {
                        dishesTypes.map((item) => {
                            return (
                                <DishesTypesCards key={item.id} imgLink={item.imageId} />
                            )
                        })}
                </Carousel>
            </div>
        </div>
    )
}

export default DishesTypes;