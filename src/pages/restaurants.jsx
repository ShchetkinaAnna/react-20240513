import { Outlet } from 'react-router-dom';

import { RestaurantsTabs } from '../components/restaurants-tabs/component';
import { useGetRestaurantsQuery, useGetUsersQuery } from '../redux/service/api';

export const RestaurantPage = () => {
  const { data: restaurants, isLoading: isLoadingRestaurants } = useGetRestaurantsQuery();
  const { isLoading: isLoadingUsers } = useGetUsersQuery();

  if (isLoadingRestaurants || isLoadingUsers) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <RestaurantsTabs restaurants={restaurants} />
      <Outlet />
    </>
  );
};
