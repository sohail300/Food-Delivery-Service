import { Box, Flex } from '@radix-ui/themes'
import { StarFilledIcon } from '@radix-ui/react-icons'
import React from 'react'

const TopRestaurantsCard = () => {
  return (
    <Box>
        <Flex direction={'column'} className='mr-10 w-100'>
        <div className='w-72 h-42'>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/q3ninryemhdwba8eam8a" alt="" className='w-64 h-36 rounded-xl object-cover'/>
        </div>
        <Box className='p-2'> 
            <div className='font-bold text-lg text-zinc-950 opacity-75 font-GrotesqueBold'>Kaveri's Restaurant</div>
            <div className='font-bold text-base flex items-center text-zinc-950 opacity-75 font-GrotesqueBold' ><StarFilledIcon className='mr-2'/> <span>4.2 • </span><span className='ml-2'>28 mins</span></div>
            <div className='text-base font-extralight text-zinc-950 opacity-60 font-Grotesque'>Biryani, North Indian</div>
            <div className='text-base font-extralight text-zinc-950 opacity-60 font-Grotesque'>Dhanbad Locality</div>
        </Box>
        </Flex>
    </Box>
  )
}

export default TopRestaurantsCard;