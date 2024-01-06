import { Box, Flex } from "@radix-ui/themes"
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import * as Slider from '@radix-ui/react-slider';
import TopRestaurantsCard from "./TopRestaurantsCard";

const TopRestaurants = () => {
    return (
        <Box>
            <Flex direction={'column'} className='w-screen pl-48 pr-48 pt-8 pb-8'>
                <Flex direction={'row'} justify={"between"}>
                    <h1 className='mb-4 title'>Top restaurant chains</h1>
                    <Flex><ArrowLeftIcon /><span><ArrowRightIcon className='ml-4' /></span></Flex>
                </Flex>
                <Flex direction={'row'} className="">
                    <TopRestaurantsCard />
                    <TopRestaurantsCard />
                    <TopRestaurantsCard />
                    <TopRestaurantsCard />
                </Flex>

            </Flex>
        </Box>
    )
}

export default TopRestaurants;