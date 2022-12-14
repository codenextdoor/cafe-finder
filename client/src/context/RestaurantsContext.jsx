import React, { createContext, useState } from "react";

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <RestaurantsContext.Provider
      value={{ restaurants, setRestaurants, addRestaurants }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};
