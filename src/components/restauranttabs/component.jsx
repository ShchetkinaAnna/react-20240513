import { useState } from "react";
import { Restaurant } from "../restaurant/component";

/* eslint-disable react/jsx-key */
export const RestaurantTabs = ({ restaurants }) => {
  const [idActiveRestaurant, setActiveRestaurant] = useState(
    restaurants?.length > 0 && restaurants[0].id,
  );

  if (!restaurants) {
    return '';
  }

  return (
    <>
      {restaurants.map((restaurant) => (
        <button onClick={() => (setActiveRestaurant(restaurant.id))}>{restaurant.name}</button>
      ))}
      <Restaurant restaurant={restaurants.find((item) => item.id === idActiveRestaurant)} />
    </>
  )
};