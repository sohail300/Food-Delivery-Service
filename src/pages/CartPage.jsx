import React from 'react'
import CartOrder from '../components/CartOrder'
import { useRecoilValue } from 'recoil';
import { cartRestaurantState } from '../store/atoms';

const Cart = () => {

  const cartRestaurant = useRecoilValue(cartRestaurantState);

  return (
    cartRestaurant === null ? <>Empty Cart</> :
      <>
        <div className='bg-zinc-200 p-8'>
          <div className='w-4/5 mx-auto flex flex-row'>
            <div className='flex flex-col w-3/5'>
              <div className='bg-white mb-4 p-8'>
                <div className='text-base font-extrabold text-zinc-950 opacity-95 font-GrotesqueBold mb-4'>Delivery Address</div>
                <div className='border-solid border-2 border-green-300 p-2 mb-4 cursor-pointer'>
                  <div className='text-base font-extrabold text-zinc-950 opacity-95 font-GrotesqueBold'>New Hostel</div>
                  <div className='text-sm text-zinc-950 opacity-60 font-proxima'>IIIT New Boys Hostel, Bhagalpur, Bihar, India</div>
                </div>
                <span className='border-solid border-2 border-green-500 py-2 px-4 text-green-500 font-proximaCond cursor-pointer'>
                  ADD NEW
                </span>
              </div>
              <div className='bg-white p-8'>
                <div className='text-base font-extrabold text-zinc-950 opacity-95 font-GrotesqueBold mb-4'>Choose Payment Method</div>
                <div className=' bg-green-500 py-2 px-4 text-white font-medium font-proxima text-sm text-center cursor-pointer'>
                  PROCEED TO PAY
                </div>
              </div>
            </div>
            <CartOrder />
          </div>
        </div>
      </>
  )
}

export default Cart