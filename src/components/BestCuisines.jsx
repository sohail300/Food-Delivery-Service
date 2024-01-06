import { Box, Flex, Grid } from "@radix-ui/themes"
import PlacesCard from "./PlacesCard"

const BestCuisines = () => {
  return (
    <Box>
    <Flex direction={'column'} className='w-screen pl-28 pr-14 pt-8 pb-8 '>
        <h1 className='mb-4 title'>Best Cuisines Near Me</h1>
        <Grid columns={'4'}>
        <PlacesCard text={'Chinese'+' Restaurant Near Me'}/>
        <PlacesCard text={'Chinese'+' Restaurant Near Me'}/>
        <PlacesCard text={'Chinese'+' Restaurant Near Me'}/>
        <PlacesCard text={'Chinese'+' Restaurant Near Me'}/>
        <PlacesCard text={'Chinese'+' Restaurant Near Me'}/>
        </Grid>
        </Flex>
    </Box>
  )
}

export default BestCuisines;