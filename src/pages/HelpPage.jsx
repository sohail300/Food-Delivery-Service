import React, { useState } from 'react'
import Partner from '../components/Partner'
import Legal from '../components/Legal'
import FAQs from '../components/FAQs'

const HelpPage = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='bg-sky-700 pb-12'>
      <div className='w-4/5 mx-auto'>
        <div className='title pt-16 text-white'>Help & Support</div>
        <div className='mb-8 text-white'>Let's take a step ahead and help you better.</div>
        <div className='mx-auto flex flex-row p-12 bg-white'>
          <div className='px-16 bg-gray-100 w-2/5'>
            <div className='flex flex-col py-4'>
              <div className='py-6 cursor-pointer font-medium text-zinc-950 opacity-60 hover:opacity-90' onClick={() => setIndex(0)}>Partner Onboarding</div>
              <div className='py-6 cursor-pointer font-medium text-zinc-950 opacity-60 hover:opacity-90' onClick={() => setIndex(1)}>Legal, Terms & Conditions</div>
              <div className='py-6 cursor-pointer font-medium text-zinc-950 opacity-60 hover:opacity-90' onClick={() => setIndex(2)}>FAQs</div>
            </div>
          </div>
          <div className='w-4/5 m-8'>
            {
              index == 0 ? <Partner /> : index == 1 ? <Legal /> : index == 2 ? <FAQs /> : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpPage