import { useEffect, useState } from 'react';
import axios from "axios";
import './RestaurantList.css';

export default function RestaurantList() {
    const [ cuisines, setCuisines ] = useState([]);
    const [ restaurants, setRestaurants ] = useState([]);

    const [name, setName] = useState('');
    const [customerRating, setCustomerRating] = useState('');
    const [price, setPrice] = useState('');
    const [distance, setDistance] = useState('');
    const [cuisineId, setCuisineId] = useState('');

    useEffect(() => {
        async function getCuisines() {
        await axios
            .get("http://localhost:8080/cuisines")
            
            .then((allCuisines) => {
            console.log(allCuisines.data);
            setCuisines(allCuisines.data);
            });
        }    
        getCuisines();
    }, []);

    async function getRestaurants() {
        await axios.get(createRestaurantsUrl()).then((restaurants) => {
            setRestaurants(restaurants.data);
        });
    }

    const handleChange = (event) => {
        setName(event.target.value);
    }

    function createRestaurantsUrl() {
        let params = "?";
        if(name)
        params += "name=" + name;
        if(customerRating)
        params += "customerRating=" + customerRating;
        if(distance)
        params += "distance=" + distance;
        if(price)
        params += "price=" + price;
        if(cuisineId)
        params += "cuisineId=" + cuisineId;
        
        return "http://localhost:8080/restaurants" + params;
    }

    return (
        <div>
            <div class="restaurants-header">
                <h1>Best Matched Restaurants</h1>
                <input class="restaurants-filter" type="text" name="" placeholder="Name" value={name} onChange={handleChange}/>
                <input class="restaurants-filter" type="text" name="" placeholder="Customer Rating"/> 
                <input class="restaurants-filter" type="text" name="" placeholder="Distance"/> 
                <input class="restaurants-filter" type="text" name="" placeholder="Price"/> 
                <input class="restaurants-filter" type="text" name="" placeholder="Cuisine"/>
                <button class="restaurants-button" onClick={getRestaurants}>Search</button>
            </div>
            
            <hr />
         <table class="restaurants-table">
           <thead>
             <tr>
               <th>Name</th>
               <th>Customer Rating</th>
               <th>Distance</th>
               <th>Price</th>
               <th>Cuisine</th>
             </tr>   
           </thead>   
           <tbody>
             {
             restaurants.map( (restaurant,key) =>
             <tr key={key}>
                 <td className='table-data'>{restaurant.name}</td>
                 <td className='table-data'>{restaurant.customerRating}</td>
                 <td className='table-data'>{restaurant.distance}</td>
                 <td className='table-data'>{restaurant.price}</td>
                 <td className='table-data'>{cuisines.find(cuisine => cuisine.id === restaurant.cuisineId).name}</td>
             </tr>
             )
           }
           </tbody>
         </table>
          
        </div>
      );
}