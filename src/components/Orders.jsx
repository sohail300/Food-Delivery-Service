import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { DishesTypesImageLink } from '../utils/config';
import { orderList } from '../utils/PastOrdersList';


const Orders = () => {
  return(
  <>
    <div className='title mb-4'>Past Orders</div>
    {
      orderList.map((item) => {
        return (
          <>
            <div key={item.cloudinaryId} className='border-2 border-solid border-zinc-200 flex flex-col p-8 mb-8'>
              <div className='border-dotted border-b-2 border-zinc-200 flex flex-row pb-4'>
                <div>
                  <img src={DishesTypesImageLink + item.cloudinaryId} alt="" className='h-24 w-24 object-cover' />
                </div>
                <div className='flex flex-col ml-4'>
                  <div className='flex flex-row justify-between'>
                    <div className='font-bold text-zinc-950 opacity-80'>{item.resName} | </div>
                    <div>
                      <span className='text-sm text-zinc-950 opacity-70'> {item.deliveredTime} </span>
                      <CheckCircleIcon className='text-green-500' />
                    </div>
                  </div>
                  <div className='text-xs text-zinc-950 opacity-70'>{item.locality}</div>
                  <div className='text-xs text-zinc-950 opacity-70'>{item.orderTime}</div>
                  <div className='text-orange-500 font-bold text-sm my-2 cursor-pointer'>VIEW DETAILS</div>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row justify-between text-base my-4'><span>{item.orderName}</span><span className='text-zinc-950 opacity-70'>{item.price}</span></div>
                <div className='flex flex-row font-bold mt-2 text-sm'><div className='mr-4 bg-orange-500 text-white py-2 px-6 cursor-pointer'>REORDER</div><div className='text-orange-500 border-solid border-2 border-orange-500 py-2 px-6 cursor-pointer'>HELP</div></div>
              </div>
            </div>
          </>
        )
      })
    }
  </>
  )
}

export default Orders