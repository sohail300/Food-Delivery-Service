import React from 'react'
import { TopRestaurantsImageLink } from '../utils/config'
import { useNavigate } from 'react-router-dom'

const TopRestaurantsCard = ({ id, name, imgLink, cuisines, rating, locality, time }) => {
  const navigate=useNavigate();

  return (
      <div className='flex flex-col mr-8 w-64 mb-8 cursor-pointer' onClick={()=> navigate(`/restaurant/${id}`)}>
        <div className='w-64 h-42'>
          <img src={`${TopRestaurantsImageLink}${imgLink}`} alt="" className='w-64 h-36 rounded-xl object-cover' />
        </div>
        <div className='p-2 text-ellipsis whitespace-nowrap overflow-hidden'>
          <div className='font-bold text-lg text-zinc-950 opacity-75 font-GrotesqueBold'>{name}</div>
          <div className='font-bold text-base div items-center text-zinc-950 opacity-75 font-GrotesqueBold' ><span>{rating} • </span><span className='ml-1'>{time} mins</span></div>
          <div className='text-base font-extralight text-zinc-950 opacity-60 font-Grotesque'>{cuisines[0] + ", " + cuisines[1]}</div>
          <div className='text-base font-extralight text-zinc-950 opacity-60 font-Grotesque'>{locality}</div>
        </div>
      </div>
  )
}

export default TopRestaurantsCard;