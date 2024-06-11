import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFirstRestaurant } from '../../redux/entities/restaurant/selectors';
import { getRestaurants } from '../../redux/entities/restaurant/thunks/get-restaurants';
import { getUsers } from '../../redux/entities/user/thunks/get-users';
import { RestaurantContainer } from '../restaurant/container';
import { RestaurantTabsContainer } from '../restaurant-tabs/container';

export const Restaurants = () => {
  const restaurantId = useSelector(selectFirstRestaurant);
  const [idActiveRestaurant, setActiveRestaurant] = useState(restaurantId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    setActiveRestaurant(restaurantId);
  }, [restaurantId]);

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
