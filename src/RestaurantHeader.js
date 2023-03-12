import { useState } from "react";
export default function RestaurantHeader({cuisines, onSearchRestaurants}) {
    const [state, setState] = useState({
        name: "", customerRating: "", price: "", distance: "", cuisine: ""
    });
    

    const handleChange = (evt) => {
        console.log(evt);
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    const sendBackParams = () => {
        const cuisineValue = !isNaN(+state.cuisine)? state.cuisine : null; // check if cuisine is a valid number before attempting request                
        onSearchRestaurants(state.name, state.customerRating, state.distance, state.price, cuisineValue);
    }

    return (
        <>
            <div className="restaurants-header">
                <h1>Best Matched Restaurants</h1>
                <input className="restaurants-filter" type="text" placeholder="Name" name="name" value={state.name} onChange={handleChange}/>
                <input className="restaurants-filter" type="text" name="customerRating" value={state.customerRating} onChange={handleChange} placeholder="Customer Rating"/> 
                <input className="restaurants-filter" type="text" name="distance" value={state.distance} onChange={handleChange}placeholder="Distance"/> 
                <input className="restaurants-filter" type="text" name="price" value={state.price}onChange={handleChange}placeholder="Price"/> 

                <select className="restaurants-filter" type="text" placeholder="Cuisine" name="cuisine" onChange={handleChange}>
                    <option>Select a cuisine</option>
                        {cuisines.map((cuisine) => <option key={cuisine.id} value={cuisine.id} >{cuisine.name}</option>)}
                </select>
                <button className="restaurants-button" onClick={sendBackParams}>Search</button>
            </div>
        </>
    );
}