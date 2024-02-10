import logo from '../assets/logo.png';
import currentYear from '../utils/currentYear';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const fullYear = currentYear();
    const navigate = useNavigate();

    return (
        <div className='bg-gray-950 text-white'>
            <div className='flex flex-row justify-between items-start w-screen pl-48 pr-48 pt-8 pb-8'>
                <div className='flex flex-col justify-centre items-center'>
                    <img src={logo} alt="logo" className='w-40 cursor-pointer' onClick={() => { navigate('/') }} />
                    <p className='text-base font-extralight opacity-90 font-Grotesque'>Rapid Food Service Limited © {fullYear}</p>
                </div>
                <div className='flex flex-col'>
                    <h3 className='font-bold text-lg mb-4 opacity-90 font-GrotesqueBold'>Company</h3>
                    <ul className='text-base font-extralight opacity-60 font-Grotesque '>
                        <li className='mb-4 cursor-pointer'>About</li>
                        <li className='mb-4 cursor-pointer'>Careers</li>
                        <li className='mb-4 cursor-pointer'>Team</li>
                    </ul>
                </div>

                <div className='flex flex-col'>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-lg mb-4 opacity-90 font-GrotesqueBold'>Contact us</h3>
                        <ul className='text-base font-extralight opacity-60 font-Grotesque'>
                            <li className='mb-4 cursor-pointer'>Help & Support</li>
                            <li className='mb-4 cursor-pointer'>Partner with us</li>
                        </ul>
                    </div>
                    <div className='flex flex-col mt-8'>
                        <h3 className='font-bold text-lg mb-4 opacity-90 font-GrotesqueBold'>Legal</h3>
                        <ul className='text-base font-extralight opacity-60 font-Grotesque'>
                            <li className='mb-4 cursor-pointer'>Terms & Conditions</li>
                            <li className='mb-4 cursor-pointer'>Cookie Policy</li>
                            <li className='mb-4 cursor-pointer'>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col h-40'>
                    <h3 className='font-bold text-lg mb-2 opacity-90 font-GrotesqueBold'>We deliver to:</h3>
                    <ul className='text-base font-extralight opacity-60 font-Grotesque'>
                        <li className='mb-4 cursor-pointer'>Bangalore</li>
                        <li className='mb-4 cursor-pointer'>Gurgaon</li>
                        <li className='mb-4 cursor-pointer'>Hyderabad</li>
                        <li className='mb-4 cursor-pointer'>Mumbai</li>
                        <li className='mb-4 cursor-pointer'>Pune</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;