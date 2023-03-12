import { useEffect, useState } from 'react';
import axios from "axios";
import './RestaurantList.css';
import RestaurantsTable from './RestaurantsTable';
import RestaurantHeader from './RestaurantHeader';
import ReactLoading from 'react-loading';

function createRestaurantsUrl(name, customerRating, distance, price, cuisineId) {
    console.log(name + customerRating + distance + price + cuisineId)
    let params = "?";
    if(name)
    params += "&name=" + name;
    if(customerRating)
    params += "&customerRating=" + customerRating;
    if(distance)
    params += "&distance=" + distance;
    if(price)
    params += "&price=" + price;
    if(cuisineId)
    params += "&cuisineId=" + cuisineId;
    
    return "http://localhost:8080/restaurants" + params;
}

export default function RestaurantList() {
    const [ cuisines, setCuisines ] = useState([]);
    const [ restaurants, setRestaurants ] = useState([]);
    const loadState = {
        NOT_LOADED: 0,
        LOADING: 1,
        LOADED: 2
    }
    const [ loaded, setLoaded ] = useState(loadState.NOT_LOADED);

    useEffect(() => {
        async function getCuisines() {
            await axios
                .get("http://localhost:8080/cuisines")                
                .then((allCuisines) => {
                    setCuisines(allCuisines.data);
            });
        }    
        getCuisines();
    }, []);

    async function getRestaurants(name, customerRating, distance, price, cuisineId) {
        setLoaded(loadState.LOADING);
        await axios.get(createRestaurantsUrl(name, customerRating, distance, price, cuisineId)).then((restaurants) => {
            setLoaded(loadState.LOADED);
            setRestaurants(restaurants.data);
        });
    }

    if(loaded === loadState.NOT_LOADED) {
        return (
            <RestaurantHeader onSearchRestaurants={getRestaurants} cuisines={cuisines}/>
          );
    } else if (loaded === loadState.LOADING) {
        return (
            <>
            <RestaurantHeader onSearchRestaurants={getRestaurants} cuisines={cuisines}/>
            <ReactLoading type="spin" color="#000" />
            </>
        );
    } else if(loaded === loadState.LOADED) {
        return (
            <>
            <RestaurantHeader onSearchRestaurants={getRestaurants} cuisines={cuisines}/>
            <RestaurantsTable restaurants={restaurants} cuisines={cuisines}/>
            </>
        );    
    }    
}
