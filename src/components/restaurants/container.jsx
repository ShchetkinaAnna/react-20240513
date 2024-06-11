import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFirstRestaurant } from '../../redux/entities/restaurant/selectors';
import { getRestaurants } from '../../redux/entities/restaurant/thunks/get-restaurants';

import { Restaurants } from './component';

export const RestaurantsContainer = () => {
  const restaurantId = useSelector(selectFirstRestaurant);
  const [idActiveRestaurant, setActiveRestaurant] = useState(restaurantId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  useEffect(() => {
    setActiveRestaurant(restaurantId);
  }, [restaurantId]);

  return <Restaurants onTabClick={setActiveRestaurant} id={idActiveRestaurant} />;
};
