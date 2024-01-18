import React, { useEffect } from 'react'
import DishesTypes from '../components/DishesTypes'
import BestPlaces from '../components/BestPlaces'
import BestCuisines from '../components/BestCuisines';
import TopRestaurants from '../components/TopRestaurants';
import RestaurantsOnline from '../components/RestaurantsOnline';
import ExploreRestaurants from '../components/ExploreRestaurants';
import DownloadApp from '../components/DownloadApp';
import { baseUrl } from '../utils/config';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { dishesTypesState, bestPlacesState, bestCuisinesState, exploreRestaurantsState, topRestaurantsState, restaurantsOnlineState } from '../store/atoms';

function Home() {
    const setExploreRestaurants = useSetRecoilState(exploreRestaurantsState);
    const setBestCuisines = useSetRecoilState(bestCuisinesState);
    const setBestPlaces = useSetRecoilState(bestPlacesState)
    const setDishesTypes = useSetRecoilState(dishesTypesState);
    const setTopRestaurants = useSetRecoilState(topRestaurantsState);
    const setRestaurantsOnline = useSetRecoilState(restaurantsOnlineState)

    const lat = 12.9351929;
    const lng = 77.62448069999999;

    const api = axios.create({
        baseUrl
    })
    console.log('inside home page')

    async function getData() {
        const res = await axios.get(`https://food-delivery-service-7vpo.onrender.com/api/restaurants?lat=${lat}&lng=${lng}`);
        console.log(res?.data?.data?.cards);
        setExploreRestaurants(res?.data?.data?.cards[8]?.card?.card?.brands);
        setBestCuisines(res?.data?.data?.cards[7]?.card?.card?.brands)
        setBestPlaces(res?.data?.data?.cards[6]?.card?.card?.brands)
        setDishesTypes(res?.data?.data?.cards[0]?.card?.card?.imageGridCards?.info)
        setTopRestaurants(res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestaurantsOnline(res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <DishesTypes />
            <TopRestaurants />
            <RestaurantsOnline />
            <BestPlaces />
            <BestCuisines />
            <ExploreRestaurants />
            <DownloadApp />
        </>
    )
}

export default Home