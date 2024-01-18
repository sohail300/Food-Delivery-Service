import React from 'react'
import { useRecoilState } from 'recoil'
import { restaurantOffersState } from '../store/atoms'
import PercentIcon from '@mui/icons-material/Percent';
import scrollbarHide from 'tailwind-scrollbar-hide';

const RestaurantOffers = () => {
    const offers = useRecoilState(restaurantOffersState);

    return (
        <>
            <div className='flex flex-row mx-80 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide'>
                {
                    offers[0].map((item) => {
                        return (
                            <div key={item?.info?.header} className='border-solid border-zinc-200 border-2 rounded mr-4 py-4 pl-4 pr-12 w-52'>
                                <div className='flex flex-col font-extrabold text-zinc-950 opacity-60 text-sm font-proxima '>{item?.info?.header}</div>
                                <div className='flex flex-col font-bold text-zinc-950 opacity-50 text-xs font-proximaCond'>{item?.info?.couponCode} | {item?.info?.description}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RestaurantOffers