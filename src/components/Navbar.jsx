import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom'
import useOnlineStatus from '../hooks/useOnlineStatus'
import { useEffect } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const online = useOnlineStatus();

  return (
    <div className='flex flex-row justify-between items-center pr-32 pl-32 w-screen shadow-lg navbar'>
      <div className='flex flex-row items-center'>
        <img src={logo} alt="logo" className='w-24 cursor-pointer' onClick={() => { navigate('/') }} />
        <h1 className='text-xl ml-8 cursor-pointer' onClick={() => { navigate('/') }}>Food Delivery</h1>
      </div>
      <ul className='flex justify-between w-2/5 font-medium text-base text-navbar font-proxima'>
      <li>
        {online? '🟢' : '🔴'}
      </li>
        <li>
          <a className='m-4 p-4 hover:cursor-pointer' color='gray' onClick={() => { navigate('/offers') }} > Offers</a>
        </li>
        <li>
          <a className='m-4 p-4 hover:cursor-pointer' color='gray' onClick={() => { navigate('/help') }} > Help</a>
        </li>
        <li>
          <a className='m-4 p-4 hover:cursor-pointer' color='gray' onClick={() => { navigate('/cart') }} > Cart</a>
        </li>
        <li>
          <a className='m-4 p-4 hover:cursor-pointer' color='gray' onClick={() => { navigate('/signin') }} > Sign In</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;