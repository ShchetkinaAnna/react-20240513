import { useSelector } from 'react-redux';

import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors';

import { RestaurantTabs } from './component';

export const RestaurantTabsContainer = ({ ...props }) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <div>
      <RestaurantTabs {...props} restaurantIds={restaurantIds} />
    </div>
  );
};
