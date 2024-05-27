import { useState } from "react";
import { Restaurant } from "../restaurant/component";
import { RestaurantTabs } from "../restaurant-tabs/component";

export const Restaurants = ({ restaurants }) => {
  const [idActiveRestaurant, setActiveRestaurant] = useState(
    restaurants?.length > 0 && restaurants[0].id,
  );

  if (!restaurants) {
    return '';
  }

  const activeRestaurantIndex = restaurants.findIndex((item) => item.id === idActiveRestaurant);

  return (
    <div>
      <RestaurantTabs restaurants={restaurants} activeTabIndex={activeRestaurantIndex} onTabClick={setActiveRestaurant} />
      <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
    </div>
  )
};