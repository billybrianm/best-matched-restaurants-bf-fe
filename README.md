
# Best Matched Restaurants

This application is a website with functionality to search for restaurants based on specific criteria.

  

Best used alongside the [backend counterpart](https://github.com/billybrianm/best-matched-restaurants-bf).

  

## Features

- Search for restaurants with five different types of filters:
```name, customerRating, distance, price, cuisineId```

  

## Requirements

- node 16.3.0+
- Docker (optional)
  
## Using Docker
Build the image

```docker build --tag=best-matched-restaurants-bf-fe:latest .```

Run the image

```docker run -p3000:3000 best-matched-restaurants-bf-fe:latest```

If you use Docker you don't need to do the following steps.

## Setting up

```npm install```

## Building

```npm build```

## Running

```npm run start```


  

## Assumptions

- No security is necessary for the scope of this project
