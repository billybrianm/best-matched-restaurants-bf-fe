
export function createRestaurantsUrl(name, customerRating, distance, price, cuisineId) {
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
    
    return process.env.REACT_APP_API_URL + process.env.REACT_APP_RESTAURANTS_ENDPOINT + params;
}
