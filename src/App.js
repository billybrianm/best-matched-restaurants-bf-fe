import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [ restaurants, setRestaurants ] = useState([]);

  useEffect(() => {
    async function getRestaurants() {
      await axios
        .get("http://localhost:8080/restaurants")
        
        .then((response) => {
          setRestaurants(response.data);
        });
    }
      getRestaurants();
  }, []);

  return (
    <div className="App">
        <h1>Best Matched Restaurants</h1>
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
             <td className='table-data'>{restaurant.cuisineId}</td>
         </tr>
         )
       }
       </tbody>
     </table>
      
    </div>
  );
}

export default App;
