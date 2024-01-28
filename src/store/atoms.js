import { atom } from "recoil";

export const dishesTypesState = atom({
    key: 'dishesTypesState',
    default: []
})

export const topRestaurantsState = atom({
    key: 'topRestaurantsState',
    default: []
})

export const restaurantsOnlineState = atom({
    key: 'restaurantsOnline',
    default: []
})

export const bestPlacesState = atom({
    key: 'bestPlacesState',
    default: []
})

export const bestCuisinesState = atom({
    key: 'bestCuisinesState',
    default: []
})

export const exploreRestaurantsState = atom({
    key: 'exploreRestaurants',
    default: []
})

export const restaurantInfoState = atom({
    key: 'restaurantInfo',
    default: []
})

export const restaurantOffersState = atom({
    key: 'restaurantOffers',
    default: []
})

export const restaurantDishesState = atom({
    key: 'restaurantDishes',
    default: []
})

export const cartRestaurantState = atom({
    key: 'cartRestaurant',
    default: { id: '10576', name: 'Pizza Hut', address: 'Koramangala', imageId: '2b4f62d606d1b2bfba9ba9e5386fabb7', deliveryCharge: 4000 }
})

export const cartDishesState = atom({
    key: 'cartDishes',
    default: [
        { id: '111819613', name: 'Margherita', quantity: 1, price: 16900 },
        { id: '47542941', name: 'Veggie Feast', quantity: 1, price: 25900 }
    ]
})

export const chargesState = atom({
    key: 'charges',
    default: null
})