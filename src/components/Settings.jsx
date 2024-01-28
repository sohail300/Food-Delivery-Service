import React from 'react'
import Switch from '@mui/material/Switch';

const Settings = () => {
  return (
    <>
    <div className='title mb-4'>SMS Preferences</div>
    <div className='text-sm font-proxima text-zinc-950 opacity-70 border-2 border-solid border-zinc-200 p-4 mb-4'>Order related SMS cannot be disabled as they are critical to provide service</div>
    <div className='border-2 border-solid border-zinc-200 p-4 flex flex-row'>
      <div className='border-solid border-r-2 border-zinc-200 flex flex-row items-center px-4'><span className='font-proxima font-bold text-zinc-950 opacity-100 text-base'>Recommendations & Reminders</span><Switch defaultChecked color="warning" /></div>
      <div className='px-4 w-2/4 text-sm text-zinc-950 opacity-60'>Keep this on to receive offer recommendations & timely reminders based on your interests</div>
    </div>
    </>
  )
}

export default Settings