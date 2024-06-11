import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useRequest } from '../../hooks/use-request';
import { selectFirstRestaurant } from '../../redux/entities/restaurant/selectors';
import { getRestaurants } from '../../redux/entities/restaurant/thunks/get-restaurants';
import { getUsers } from '../../redux/entities/user/thunks/get-users';
import { REQUEST_STATUS } from '../../redux/ui/request/constants';
import { RestaurantContainer } from '../restaurant/container';
import { RestaurantTabsContainer } from '../restaurant-tabs/container';

export const Restaurants = () => {
  const restaurantId = useSelector(selectFirstRestaurant);
  const [idActiveRestaurant, setActiveRestaurant] = useState(restaurantId);

  const requestRestaurantsStatus = useRequest(getRestaurants);
  const requestUsersStatus = useRequest(getUsers);

  useEffect(() => {
    setActiveRestaurant(restaurantId);
  }, [restaurantId]);

  if (
    requestRestaurantsStatus === REQUEST_STATUS.pending ||
    requestUsersStatus === REQUEST_STATUS.pending
  ) {
    return <div>Loading...</div>;
  }

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
