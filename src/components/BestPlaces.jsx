import { Box, Grid, Flex } from '@radix-ui/themes'
import React from 'react'
import PlacesCard from './PlacesCard'

const BestPlaces = () => {
  return (
    <Box>
    <Flex direction={'column'} className='w-screen pl-28 pr-14 pt-8 pb-8 '>
        <h1 className='mb-4 title'>Best Places to Eat Across Cities</h1>
        <Grid columns={'4'}>
        <PlacesCard text={'Best Restaurants in '+'Banglore'}/>
        <PlacesCard text={'Best Restaurants in '+'Banglore'}/>
        <PlacesCard text={'Best Restaurants in '+'Banglore'}/>
        <PlacesCard text={'Best Restaurants in '+'Banglore'}/>
        <PlacesCard text={'Best Restaurants in '+'Banglore'}/>
        </Grid>
    </Flex>
    </Box>
  )
}

export default BestPlaces;