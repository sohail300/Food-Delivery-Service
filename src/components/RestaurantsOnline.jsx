import { Box, Flex, Grid } from "@radix-ui/themes"
import TopRestaurantsCard from "./TopRestaurantsCard"

const RestaurantsOnline = () => {
  return (
    <Box>
      <Flex direction={'column'} className='w-screen pl-48 pr-48 pt-8 pb-8'>
        <Flex direction={'row'} justify={"between"}>
          <h1 className='mb-4 title'>Restaurants with online food delivery</h1>
        </Flex>
        <Grid columns={'4'} gap={'6'}>
          <TopRestaurantsCard />
          <TopRestaurantsCard />
          <TopRestaurantsCard />
          <TopRestaurantsCard />
          <TopRestaurantsCard />
        </Grid>
      </Flex>
    </Box>
  )
}

export default RestaurantsOnline