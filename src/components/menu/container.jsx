import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useRequest } from '../../hooks/use-request';
import { getDishesByRestaurantId } from '../../redux/entities/dish/thunks/get-dishes-by-restaurant-id';
import { selectRestaurantDishIds } from '../../redux/entities/restaurant/selectors';
import { REQUEST_STATUS } from '../../redux/ui/request/constants';

import { Menu } from './component';

export const MenuContainer = ({ restaurantId }) => {
  const dishIds = useSelector((state) => selectRestaurantDishIds(state, restaurantId));

  const requestStatus = useRequest(
    getDishesByRestaurantId,
    useMemo(() => ({ restaurantId }), [restaurantId]),
  );

  if (requestStatus === REQUEST_STATUS.pending) {
    return <div>Loading...</div>;
  }

  if (!dishIds) {
    return '';
  }

  return <Menu ids={dishIds} />;
};
