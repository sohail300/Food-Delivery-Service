import React from 'react'
import { useRecoilState } from 'recoil'
import { restaurantDishesState } from '../store/atoms'
import { RestaurantDishesImageLink } from '../utils/config'
import NONVEG from '../assets/images/non_veg.svg'
import VEG from '../assets/images/veg.svg'
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const RestaurantDishes = () => {
  const dishes = useRecoilState(restaurantDishesState);
  console.log(dishes);

  return (
    dishes[0].map((arrItem) => {
      return (
        arrItem.card.card["@type"].includes('ItemCategory') &&
          <div className='mx-80'>
            <Accordion className='my-4'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className='font-bold text-xl text-zinc-950 opacity-90 my-4'
              >
                {arrItem?.card?.card?.title} ({arrItem?.card?.card?.itemCards?.length})
              </AccordionSummary>
            {
              arrItem?.card?.card?.itemCards?.map(item => {
                return (
                  <AccordionDetails>
                    <div className='flex flex-row justify-between pb-8 mb-8 border-solid border-b-2 border-zinc-200' key={item?.card?.info?.id}>
                      <div className='flex flex-col'>
                        <div className='flex flex-row items-center'>
                          {item?.card?.info?.itemAttribute?.vegClassifier === 'NONVEG' ? (
                            <div><img src={NONVEG} alt="" className='w-4 h-auto' /></div>
                          ) : (
                            <div><img src={VEG} alt="" className='w-4 h-auto' /></div>
                          )}
                          {item?.card?.info?.ribbon?.text === 'Bestseller' && (
                            <div className='text-yellow-500'><StarIcon fontSize='small' className='flex flex-row justify-center items-center ml-2 mb-1' /><span className='text-sm font-proximaCond'>{item?.card?.info?.ribbon?.text}</span></div>
                          )}
                        </div>
                        <div className='text-zinc-950 opacity-80 font-medium'>{item?.card?.info?.name}</div>
                        <div className='text-zinc-950 opacity-90'>₹{(item?.card?.info?.price) / 100}</div>
                        <div className='text-zinc-950 opacity-60 my-4 text-xs'>{item?.card?.info?.description}</div>

                      </div>
                      <div>
                        <img src={RestaurantDishesImageLink + item?.card?.info?.imageId} alt="photo" className='rounded w-32' />
                      </div>
                    </div>
                  </AccordionDetails>
                )
              })
            }
            </Accordion>
          </div>
      )
    })
  )
}

export default RestaurantDishes