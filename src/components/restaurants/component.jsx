import { useEffect, useState } from 'react';

import { useGetRestaurantsQuery, useGetUsersQuery } from '../../redux/service/api';
import { Restaurant } from '../restaurant/component';
import { RestaurantTabs } from '../restaurant-tabs/component';

export const Restaurants = () => {
  const { data: restaurants, isLoading: isLoadingRestaurants } = useGetRestaurantsQuery();
  const { isLoading: isLoadingUsers } = useGetUsersQuery();
  const [idActiveRestaurant, setActiveRestaurant] = useState(null);

  useEffect(() => {
    setActiveRestaurant(restaurants?.length > 0 && restaurants[0].id);
  }, [restaurants]);

  if (isLoadingRestaurants || isLoadingUsers) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <RestaurantTabs
        restaurants={restaurants}
        onTabClick={setActiveRestaurant}
        idActiveRestaurant={idActiveRestaurant}
      />
      <Restaurant restaurantId={idActiveRestaurant} />
    </div>
  );
};
