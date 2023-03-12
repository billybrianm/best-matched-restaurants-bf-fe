import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [ restaurants, setRestaurants ] = useState([]);
  const [ cuisines, setCuisines ] = useState([]);

  useEffect(() => {
    async function getCuisines() {
      await axios
        .get("http://localhost:8080/cuisines")
        
        .then((allCuisines) => {
          console.log(allCuisines.data);
          setCuisines(allCuisines.data);
        });
    }
    async function getRestaurants() {
      await axios
        .get("http://localhost:8080/restaurants")
        
        .then((restaurants) => {
          setRestaurants(restaurants.data);
        });
    }
    getCuisines();
    getRestaurants();
  }, []);

  return (
    <div className="App">
        <h1>Best Matched Restaurants</h1>
        <input type="text" name="" placeholder="Name"/>
        <input type="text" name="" placeholder="Customer Rating"/> 
        <input type="text" name="" placeholder="Distance"/> 
        <input type="text" name="" placeholder="Price"/> 
        <input type="text" name="" placeholder="Cuisine"/>
        <button>Search</button>
     <table>
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

export default App;
