export default function RestaurantsTable({restaurants, cuisines}) {

    return (
        <div>            
            <hr />
         <table className="restaurants-table">
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
