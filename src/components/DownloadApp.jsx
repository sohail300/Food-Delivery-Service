import { Box, Flex } from '@radix-ui/themes'
import playStore from '../assets/images/play_store.png'
import appStore from '../assets/images/app_store.png'

const DownloadApp = () => {
    return (
        <Box className='bg-stone-200 w-screen pl-56 pr-56 pt-8 pb-8'>
            <Flex direction={'row'} justify={'between'}>
            <Flex direction={'column'}>
                <h2 className='text-3xl font-extrabold w-100 pr-24 text-zinc-950 opacity-75'>
                    For better experience, download
                </h2>
                <h2 className='text-3xl font-extrabold w-100 pr-24 text-zinc-950 opacity-75'>
                the Swiggy app now
                </h2>
            </Flex>

                <Flex direction={'row'} justify={'between'}>
                    <img src={playStore} alt="play-store" className='w-48 h-16 mr-8'/>
                    <img src={appStore} alt="app-store" className='w-48 h-16'/>
                </Flex>
            </Flex>
        </Box>
    )
}

export default DownloadApp