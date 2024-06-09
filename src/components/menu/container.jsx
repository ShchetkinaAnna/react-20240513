import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDishesByRestaurantId } from '../../redux/entities/dish/thunks/get-dishes-by-restaurant-id';
import { selectRestaurantDishIds } from '../../redux/entities/restaurant/selectors';

import { Menu } from './component';

export const MenuContainer = ({ restaurantId }) => {
  const dishIds = useSelector((state) => selectRestaurantDishIds(state, restaurantId));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishesByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  if (!dishIds) {
    return '';
  }

  return <Menu ids={dishIds} />;
};
