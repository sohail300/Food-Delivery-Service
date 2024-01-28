import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Addresses = () => {
  return (
    <>
    <div className='title mb-4'>Manage Addresses</div>
    <div className='border-2 border-solid border-zinc-200 flex flex-row p-4'>
    <div className=''><LocationOnOutlinedIcon className='mr-4'/></div>
    <div className='flex flex-col'>
      <div className='font-bold text-zinc-950 opacity-90'>New Hostel</div>
      <div className='text-xs text-zinc-950 opacity-90'>IIIT New Boys Hostel, Bhagalpur, Bihar, India</div>
      <div className='flex flex-row text-orange-500 font-bold mt-2 text-sm'><a href="" className='mr-4'>EDIT</a><a href="">DELETE</a></div>
    </div>
    </div>
    </>
  )
}

export default Addresses