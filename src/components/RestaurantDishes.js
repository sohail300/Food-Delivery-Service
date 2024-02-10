import React, { useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { cartDishesState, restaurantDishesState } from '../store/atoms'
import { RestaurantDishesImageLink } from '../utils/config'
import NONVEG from '../assets/images/non_veg.svg'
import VEG from '../assets/images/veg.svg'
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { cartRestaurantState, restaurantInfoState } from '../store/atoms'

const RestaurantDishes = () => {
  const [cartItemWithId, setCartItemWithId] = useState(null);
  const restaurantInfo = useRecoilValue(restaurantInfoState);
  const setCartRestaurant = useSetRecoilState(cartRestaurantState);
  const cartRestaurant = useRecoilValue(cartRestaurantState);

  const cartDishes = useRecoilValue(cartDishesState);
  const setCartDishes = useSetRecoilState(cartDishesState);

  const dishes = useRecoilState(restaurantDishesState);
  console.log(dishes);
  console.log(restaurantInfo);

  function addToCart(id, name, price, isVeg) {
    if (cartRestaurant !== null && cartRestaurant.id !== restaurantInfo.id) {
      console.log('cart Rest: ' + cartRestaurant.id)
      console.log('Rest Info: ' + restaurantInfo.id)
      alert('Already Different Restaurant Added');
    } else {
      setCartRestaurant({ id: restaurantInfo.id, name: restaurantInfo.name, address: restaurantInfo.areaName, imageId: restaurantInfo.cloudinaryImageId, deliveryCharge: restaurantInfo.feeDetails.totalFee});
      // let tempArray=cartDishes;
      // tempArray.push({id: id, name: name, quantity: 1, price: price})
      if (cartDishes !== null) {
        setCartDishes([...cartDishes, { id: id, name: name, quantity: 1, price: price, veg: isVeg }])
      } else {
        setCartDishes([{ id: id, name: name, quantity: 1, price: price }])
      }
    }
  }

  function checkIfAlreadyPresent(id) {
    if (cartDishes !== null) {
      const temp = cartDishes.find(element => element.id == id)
      if (temp) {
        setCartItemWithId(temp);
      }
    }
  }

  return (
    dishes[0].map((arrItem, index) => {
      return (
        arrItem.card.card["@type"].includes('ItemCategory') && arrItem.card.card.itemCards!=null && 
        <div className='mx-80' key={index}>
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
                  <AccordionDetails key={item?.card?.info?.id}>
                    <div className='flex flex-row justify-between pb-8 mb-8 border-solid border-b-2 border-zinc-200'>
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
                        <div className='text-zinc-950 opacity-90'>₹{(item?.card?.info?.price==null? item?.card?.info?.defaultPrice/ 100 : item?.card?.info?.price/ 100) }</div>
                        <div className='text-zinc-950 opacity-60 my-4 text-xs w-4/5'>{item?.card?.info?.description}</div>

                      </div>
                      <div className='flex flex-col items-center'>
                        <img src={RestaurantDishesImageLink + item?.card?.info?.imageId} alt="photo" className='rounded w-32 cursor-pointer' />

                        <div className='shadow-lg bg-white text-green-500 border-2 border-zinc-200 font-proxima text-center text-sm py-2 px-2 w-28 rounded-md relative bottom-6 cursor-pointer flex flex-row justify-evenly items-center' onClick={()=> addToCart(item?.card?.info?.id, item?.card?.info?.name, item?.card?.info?.price==null? item?.card?.info?.defaultPrice: item?.card?.info?.price, item?.card?.info?.itemAttribute.vegClassifier==='VEG'? true: false)}>ADD</div>
                        {/* {
                          checkIfAlreadyPresent(item?.card?.info?.id)

                            (cartItemWithId == null) ? <div className='shadow-lg bg-white text-green-500 border-2 border-zinc-200 font-proxima text-center text-sm py-2 px-8 w-28 rounded-md relative bottom-6 cursor-pointer' onClick={() => addToCart(item?.card?.info?.id, item?.card?.info?.name, item?.card?.info?.price)}>ADD</div> :
                            
                        } */}
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