import { useState } from "react";
export default function RestaurantHeader({cuisines, onSearchRestaurants}) {
    const [state, setState] = useState({
        name: "", customerRating: "", price: "", distance: "", cuisine: ""
    });
    
    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    const sendBackParams = () => {
        const tempState = validateParams(state);
        onSearchRestaurants(state.name, tempState.customerRating, tempState.distance, tempState.price, tempState.cuisine);
    }

    // check if all valuesare valid before attempting request
    // if user inserts letters in numeric fields, just ignore them and send the request with null
    const validateParams = (state) => {
        return {
            customerRating : !isNaN(+state.customerRating)? state.customerRating : null,
            distance: !isNaN(+state.distance)? state.distance : null,
            price: !isNaN(+state.price)? state.price : null,
            cuisine : !isNaN(+state.cuisine)? state.cuisine : null,
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendBackParams();
        }
      };

    return (
        <>
            <div className="restaurants-header" onKeyDown={handleKeyDown}>
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
