import { Outlet, useParams } from 'react-router-dom';

import { useGetRestaurantsQuery } from '../../redux/service/api';
import { selectEntityFromResult } from '../../redux/service/api/selectors';
import { RestaurantTabs } from '../restaurant-tabs/component';

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: selectEntityFromResult(restaurantId),
  });

  if (!restaurant) {
    return '';
  }

  return (
    <div>
      <h2>Название ресторана: {restaurant.name}</h2>
      <RestaurantTabs />
      <Outlet />
    </div>
  );
};
