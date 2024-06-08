import { useState } from 'react';

import { Restaurant } from '../restaurant/component';
import { RestaurantTabs } from '../restaurant-tabs/component';

export const Restaurants = () => {
  const [idActiveRestaurant, setActiveRestaurant] = useState(null);

  return (
    <div>
      <RestaurantTabs onTabClick={setActiveRestaurant} />
      <Restaurant restaurantId={idActiveRestaurant} />
    </div>
  );
};
