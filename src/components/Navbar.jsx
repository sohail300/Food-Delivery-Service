import { Flex, Box, Button } from '@radix-ui/themes';
import { MagnifyingGlassIcon, PersonIcon, MagicWandIcon, LightningBoltIcon, BackpackIcon } from '@radix-ui/react-icons'
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <Flex direction="row" justify='space-between' align='center' className='pr-32 pl-32 w-screen shadow-lg'>
    <Flex direction='row' align='center' >
      <img src={logo} alt="logo" className='w-24' />
      <h1 className='text-xl ml-8'>Food Delivery</h1>
    </Flex>
      <ul className='flex justify-between w-2/5 font-medium text-base text-navbar font-proxima'>
        <li>
      <Button variant="ghost" size={3} className='m-4 p-40 text-xl hover:cursor-pointer hover:' color='gray'><LightningBoltIcon height='20' width='24'/> Offers</Button>
        </li>
        <li>
      <Button variant="ghost" size={3} className='m-4 p-40' color='gray'><MagicWandIcon height='20' width='24'/> Help</Button>
        </li>
        <li>
      <Button variant="ghost" size={3} className='m-4 p-4'  color='gray'><PersonIcon height='20' width='24'/> Sign In</Button>
        </li>
        <li>
        <Button variant="ghost" size={3} className='m-4'  color='gray'><BackpackIcon height='20' width='24'/> Cart</Button>
        </li>
      </ul>
      </Flex>
  );
}

export default Navbar;