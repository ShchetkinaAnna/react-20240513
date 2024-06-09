import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';
import { getRestaurants } from '../../redux/entities/restaurant/thunks/get-restaurants';
import { RestaurantContainer } from '../restaurant/container';
import { RestaurantTabsContainer } from '../restaurant-tabs/container';

export const Restaurants = () => {
  const restaurantId = useSelector((state) => selectRestaurantById(state, 0));
  const [idActiveRestaurant, setActiveRestaurant] = useState(restaurantId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

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
