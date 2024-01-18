import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { restaurantInfoState, restaurantOffersState, restaurantDishesState } from '../store/atoms';
import { useSetRecoilState } from 'recoil';
import RestaurantInfo from '../components/RestaurantInfo';
import RestaurantOffers from '../components/RestaurantOffers';
import RestaurantDishes from '../components/RestaurantDishes.js';
import Button from '@mui/material/Button';

const RestaurantPage = () => {
    const setRestaurantOffers = useSetRecoilState(restaurantOffersState);
    const setRestaurantDishes = useSetRecoilState(restaurantDishesState);
    const setRestaurantInfo = useSetRecoilState(restaurantInfoState);

    const [isLoading, setIsLoading] = useState(true);

    const lat = 12.9351929;
    const lng = 77.62448069999999;

    const { resId } = useParams();

    async function getRestaurantData() {
        const res = await axios.get(`https://food-delivery-service-7vpo.onrender.com/api/menu?lat=${lat}&lng=${lng}&restaurantId=${resId}`);
        // console.log(res.data.data.cards);
        setRestaurantInfo(res?.data?.data?.cards[0]?.card?.card?.info);
        setRestaurantOffers(res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers);
        setRestaurantDishes(res?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        setIsLoading(false);
    }

    useEffect(() => {
        getRestaurantData();
    }, [])

    return (
        <>
            {isLoading ? <div>Loading</div> :
                <>
                    <RestaurantInfo />
                    <RestaurantOffers />
                    <RestaurantDishes />
                </>
            }
        </>
    )
}

export default RestaurantPage