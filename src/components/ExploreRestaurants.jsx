import { Box, Flex, Grid } from "@radix-ui/themes"
import PlacesCard from "./PlacesCard"

const ExploreRestaurants = () => {
  return (
    <Box>
    <Flex direction={'column'} className='w-screen pl-28 pr-14 pt-8 pb-8 '>
        <h1 className='mb-4 title'>Explore Every Restaurants Near Me</h1>
        <Grid columns={'2'}>
        <Box className='border-solid border-2 border-gray rounded-lg w-100 mr-12 mb-4 h-12 flex items-center justify-center text-base font-normal text-zinc-950 opacity-75 font-Grotesque' >Explore Restaurants Near Me</Box>
        <Box className='border-solid border-2 border-gray rounded-lg w-100 mr-12 mb-4 h-12 flex items-center justify-center text-base font-normal text-zinc-950 opacity-75 font-Grotesque' >Explore Top Rated Restaurants Near Me</Box>
        </Grid>
        </Flex>
    </Box>
  )
}

export default ExploreRestaurants