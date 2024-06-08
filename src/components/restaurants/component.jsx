import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectFirstRestaurantId } from '../../redux/entities/restaurant/selectors';
import { RestaurantContainer } from '../restaurant/container';
import { RestaurantTabsContainer } from '../restaurant-tabs/container';

export const Restaurants = () => {
  const restaurantId = useSelector(selectFirstRestaurantId);
  const [idActiveRestaurant, setActiveRestaurant] = useState(restaurantId);

  return (
    <div>
      <RestaurantTabsContainer
        onTabClick={setActiveRestaurant}
        idActiveRestaurant={idActiveRestaurant}
      />
      <RestaurantContainer id={idActiveRestaurant} />
    </div>
  );
};
