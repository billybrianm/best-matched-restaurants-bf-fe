
export function createRestaurantsUrl(name, customerRating, distance, price, cuisineId) {
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
