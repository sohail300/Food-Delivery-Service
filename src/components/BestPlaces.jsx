import React from 'react'
import PlacesCard from './PlacesCard'
import { useRecoilValue } from 'recoil'
import { bestPlacesState } from '../store/atoms'

const BestPlaces = () => {
  const bestPlaces = useRecoilValue(bestPlacesState);

  return (
    <div>
      <div className='flex flex-col  mt-8 mb-8 w-4/5 mx-auto'>
        <h1 className='mb-4 title'>Best Places to Eat Across Cities</h1>
        <div className='grid grid-cols-4'>
          {
            bestPlaces.map((item) => {
              return (
                <PlacesCard key={item.text} text={item.text} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default BestPlaces;