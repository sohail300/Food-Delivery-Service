import React, { useEffect } from 'react'
import DishesTypes from '../components/DishesTypes'
import BestPlaces from '../components/BestPlaces'
import BestCuisines from '../components/BestCuisines';
import TopRestaurants from '../components/TopRestaurants';
import RestaurantsOnline from '../components/RestaurantsOnline';
import ExploreRestaurants from '../components/ExploreRestaurants';
import DownloadApp from '../components/DownloadApp';
import { baseUrl } from '../utils/config';
import axois from 'axios';

function Home() {

    const api=axois.create({
        baseUrl
    })

    async function fetchData(){
        const res=await axois.get('https://swiggyapiwrapper.dineshrout.repl.co/api/restaurants/');
        console.log(res.data);
    }

    useEffect(()=> {
        fetchData();
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