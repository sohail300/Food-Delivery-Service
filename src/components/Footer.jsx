import { Flex, Box } from '@radix-ui/themes'
import logo from '../assets/logo.png';
import currentYear from '../utils/currentYear';

const Footer = () => {
    const fullYear = currentYear();

    return (
        <Box className='bg-gray-950 text-white'>
            <Flex direction={'row'} justify={'space-between'} align={'start'} className='w-screen pl-48 pr-48 pt-8 pb-8'>
                <Flex direction={'column'} justify={'center'} align={"center"}>
                    <img src={logo} alt="logo" className='w-40' />
                    <p className='text-base font-extralight opacity-90 font-Grotesque'>Food Delivery Service Limited © {fullYear}</p>
                </Flex>
                <Flex direction={'column'} >
                    <h3 className='font-bold text-lg mb-4 opacity-90 font-GrotesqueBold'>Company</h3>
                    <ul className='text-base font-extralight opacity-60 font-Grotesque'>
                        <li className='mb-4'>About</li>
                        <li className='mb-4'>Careers</li>
                        <li className='mb-4'>Team</li>
                    </ul>
                </Flex>

                <Flex direction={'column'}>
                    <Flex direction={'column'}>
                        <h3 className='font-bold text-lg mb-4 opacity-90 font-GrotesqueBold'>Contact us</h3>
                        <ul className='text-base font-extralight opacity-60 font-Grotesque'>
                            <li className='mb-4'>Help & Support</li>
                            <li className='mb-4'>Partner with us</li>
                        </ul>
                    </Flex>
                    <Flex direction={'column'} className='mt-8'>
                        <h3 className='font-bold text-lg mb-4 opacity-90 font-GrotesqueBold'>Legal</h3>
                        <ul className='text-base font-extralight opacity-60 font-Grotesque'>
                            <li className='mb-4'>Terms & Conditions</li>
                            <li className='mb-4'>Cookie Policy</li>
                            <li className='mb-4'>Privacy Policy</li>
                        </ul>
                    </Flex>
                </Flex>
                <Flex direction={'column'} className='h-40'>
                    <h3 className='font-bold text-lg mb-2 opacity-90 font-GrotesqueBold'>We deliver to:</h3>
                    <ul className='text-base font-extralight opacity-60 font-Grotesque'>
                        <li className='mb-4'>Bangalore</li>
                        <li className='mb-4'>Gurgaon</li>
                        <li className='mb-4'>Hyderabad</li>
                        <li className='mb-4'>Mumbai</li>
                        <li className='mb-4'>Pune</li>
                    </ul>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Footer;