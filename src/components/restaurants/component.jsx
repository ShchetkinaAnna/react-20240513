import { RestaurantContainer } from '../restaurant/container';
import { RestaurantTabsContainer } from '../restaurant-tabs/container';

export const Restaurants = ({ id, onTabClick }) => {
  return (
    <div>
      <RestaurantTabsContainer onTabClick={onTabClick} idActiveRestaurant={id} />
      <RestaurantContainer id={id} />
    </div>
  );
};
