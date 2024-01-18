import React from 'react'
import { useRecoilValue } from 'recoil'
import { restaurantInfoState } from '../store/atoms'
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const RestaurantInfo = () => {
    const restaurantInfo= useRecoilValue(restaurantInfoState);
    console.log(restaurantInfo)

  return (
    <>
    <div className='mx-80 mt-12'>
    <div className='flex flex-row justify-between border-dashed border-zinc-200 border-b-2 py-4'>
      <div className='flex flex-col'>
      <div className='title text-xl'>{restaurantInfo?.name}</div>
      <div className='text-zinc-950 opacity-75 font-Grotesque text-sm'>{restaurantInfo?.cuisines?.join(', ')}</div>
      <div className='text-zinc-950 opacity-75 font-Grotesque'>{restaurantInfo?.locality}, {restaurantInfo?.sla?.slaString}</div>
      </div>
      <div className='flex-col justify-between items-center border-solid border-zinc-200 border-2 rounded'>
        <div className='font-bold text-green-600 flex justify-center items-center py-2'><StarIcon fontSize='small'/><span>{restaurantInfo?.avgRating}</span></div>
        <div className='text-zinc-950 opacity-60 font-bold font-proximaCond m-0 py-2 px-2 border-solid border-zinc-200 border-t-2 rounded'>{restaurantInfo?.totalRatingsString}</div>
      </div>
    </div>
    <div className='flex flex-row my-4'>
      <div className='mr-10 text-zinc-950 opacity-80 text-bold flex justify-center items-center'><AccessTimeFilledIcon className='mr-2'/><span>{restaurantInfo?.sla?.slaString}</span></div>
      <div className='text-zinc-950 opacity-80 text-bold flex justify-center items-center'><AccountBalanceWalletIcon className='mr-2'/><span>{restaurantInfo?.costForTwoMessage}</span></div>
    </div>
    </div>
    </>
  )
}

export default RestaurantInfo