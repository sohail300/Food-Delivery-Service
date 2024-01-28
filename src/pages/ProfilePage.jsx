import React, { useState } from 'react'
import Orders from '../components/Orders'
import Addresses from '../components/Addresses'
import Settings from '../components/Settings'

const ProfilePage = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='bg-sky-700 pb-12'>
      <div className='w-4/5 mx-auto'>
        <div className='title pt-16 text-white'>User</div>
        <div className='mb-8 text-white'>0123456789  .  test@test.com</div>
        <div className='mx-auto flex flex-row p-12 bg-white'>
          <div className='px-16 bg-gray-100 w-1/5'>
            <div className='flex flex-col py-4'>
              <div className='py-6 cursor-pointer font-medium text-zinc-950 opacity-60 hover:opacity-90' onClick={() => setIndex(0)}>Orders</div>
              <div className='py-6 cursor-pointer font-medium text-zinc-950 opacity-60 hover:opacity-90' onClick={() => setIndex(1)}>Addresses</div>
              <div className='py-6 cursor-pointer font-medium text-zinc-950 opacity-60 hover:opacity-90' onClick={() => setIndex(2)}>Settings</div>
            </div>
          </div>
          <div className='w-4/5 m-8'>
            {
              index == 0 ? <Orders /> : index == 1 ? <Addresses /> : index == 2 ? <Settings /> : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage