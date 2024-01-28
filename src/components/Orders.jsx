import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { DishesTypesImageLink } from '../utils/config';

const Orders = () => {
  return (
    <>
      <div className='title mb-4'>Past Orders</div>
      <div className='border-2 border-solid border-zinc-200 flex flex-col p-8 mb-8'>
        <div className='border-dotted border-b-2 border-zinc-200 flex flex-row pb-4'>
          <div>
            <img src={DishesTypesImageLink + 'zofm2lphc3s5zfusmfwt'} alt="" className='h-24 w-24 object-cover' />
          </div>
          <div className='flex flex-col ml-4'>
            <div className='flex flex-row justify-between'>
              <div className='font-bold text-zinc-950 opacity-80'>Bake Club & Big Bite Rolls | </div>
              <div>
                <span className='text-sm text-zinc-950 opacity-70'> Delivered on Sun, Nov 19, 2023, 05:39 PM</span>
                <CheckCircleIcon className='text-green-500' />
              </div>
            </div>
            <div className='text-xs text-zinc-950 opacity-70'>Bhagalpur Locality</div>
            <div className='text-xs text-zinc-950 opacity-70'>ORDER #159362248080463 | Sun, Nov 19, 2023, 04:47 PM</div>
            <div className='text-orange-500 font-bold text-sm my-2'>VIEW DETAILS</div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-row justify-between text-base my-4'><span>Double Egg Paneer Roll x 1</span><span className='text-zinc-950 opacity-70'>Total Paid: ₹145</span></div>
          <div className='flex flex-row font-bold mt-2 text-sm'><div className='mr-4 bg-orange-500 text-white py-2 px-6'>REORDER</div><div className='text-orange-500 border-solid border-2 border-orange-500 py-2 px-6'>HELP</div></div>
        </div>
      </div>

      <div className='border-2 border-solid border-zinc-200 flex flex-col p-8 mb-8'>
        <div className='border-dotted border-b-2 border-zinc-200 flex flex-row pb-4'>
          <div>
            <img src={DishesTypesImageLink + 'd4c816af064739fbe883757a2f4584c4'} alt="" className='h-24 w-24 object-cover' />
          </div>
          <div className='flex flex-col ml-4'>
            <div className='flex flex-row justify-between'>
              <div className='font-bold text-zinc-950 opacity-80'>Metro Mirchi 2.0 | </div>
              <div>
                <span className='text-sm text-zinc-950 opacity-70'> Delivered on Sun, Nov 12, 2023, 03:39 PM</span>
                <CheckCircleIcon className='text-green-500' />
              </div>
            </div>
            <div className='text-xs text-zinc-950 opacity-70'>Bhagalpur Locality</div>
            <div className='text-xs text-zinc-950 opacity-70'>ORDER #158750553410042 | Sun, Nov 12, 2023, 02:52 PM</div>
            <div className='text-orange-500 font-bold text-sm my-2'>VIEW DETAILS</div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-row justify-between text-base my-4'><span>Chicken Hyderabadi Biryani x 1</span><span className='text-zinc-950 opacity-70'>Total Paid: ₹146</span></div>
          <div className='flex flex-row font-bold mt-2 text-sm'><div className='mr-4 bg-orange-500 text-white py-2 px-6'>REORDER</div><div className='text-orange-500 border-solid border-2 border-orange-500 py-2 px-6'>HELP</div></div>
        </div>
      </div>

      <div className='border-2 border-solid border-zinc-200 flex flex-col p-8 mb-8'>
        <div className='border-dotted border-b-2 border-zinc-200 flex flex-row pb-4'>
          <div>
            <img src={DishesTypesImageLink + 'ungxloaotijtfn2ccxbc'} alt="" className='h-24 w-24 object-cover' />
          </div>
          <div className='flex flex-col ml-4'>
            <div className='flex flex-row justify-between'>
              <div className='font-bold text-zinc-950 opacity-80'>Domino's Pizza | </div>
              <div>
                <span className='text-sm text-zinc-950 opacity-70'> Delivered on Fri, Apr 28, 2023, 02:10 PM</span>
                <CheckCircleIcon className='text-green-500' />
              </div>
            </div>
            <div className='text-xs text-zinc-950 opacity-70'>Bhagalpur Locality</div>
            <div className='text-xs text-zinc-950 opacity-70'>ORDER #165744972889 | Fri, Apr 28, 2023, 01:46 PM</div>
            <div className='text-orange-500 font-bold text-sm my-2'>VIEW DETAILS</div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-row justify-between text-base my-4'><span>Cheesy x 1, Paneer, Onion & Capsicum with Desi Makhani Sauce x 1</span><span className='text-zinc-950 opacity-70'>Total Paid: ₹265</span></div>
          <div className='flex flex-row font-bold mt-2 text-sm'><div className='mr-4 bg-orange-500 text-white py-2 px-6'>REORDER</div><div className='text-orange-500 border-solid border-2 border-orange-500 py-2 px-6'>HELP</div></div>
        </div>
      </div>

    </>
  )
}

export default Orders