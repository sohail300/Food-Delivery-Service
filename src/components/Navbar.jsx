import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom'
import useOnlineStatus from '../hooks/useOnlineStatus'
import PercentIcon from '@mui/icons-material/Percent';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';

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
        <li className='flex flex-row items-center'>
          {online ? '🟢' : '🔴'}
        </li>
        {/* <li>
          <a className='m-4 p-4 hover:cursor-pointer flex flex-row items-center' color='gray' onClick={() => { navigate('/offers') }} ><PercentIcon fontSize='small' className='mr-2' /> Offers</a>
        </li> */}
        <li>
          <a className='m-4 p-4 hover:cursor-pointer flex flex-row items-center' color='gray' onClick={() => { navigate('/help') }} ><QuestionMarkOutlinedIcon fontSize='small' className='mr-2' /> Help</a>
        </li>
        <li>
          <a className='m-4 p-4 hover:cursor-pointer flex flex-row items-center' color='gray' onClick={() => { navigate('/profile') }} ><AccountCircleOutlinedIcon fontSize='small' className='mr-2' /> User</a>
        </li>
        <li>
          <a className='m-4 p-4 hover:cursor-pointer flex flex-row items-center' color='gray' onClick={() => { navigate('/cart') }} ><ShoppingCartOutlinedIcon fontSize='small' className='mr-2' /> Cart</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;