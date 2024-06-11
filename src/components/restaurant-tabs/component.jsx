import { RestaurantTabContainer } from '../restaurant-tab/container';

/* eslint-disable react/jsx-key */
export const RestaurantTabs = ({ restaurantIds, onTabClick, idActiveRestaurant }) => {
  return (
    <div>
      {restaurantIds.map((restaurantId) => (
        <RestaurantTabContainer
          id={restaurantId}
          isActive={restaurantId === idActiveRestaurant}
          onClick={() => {
            onTabClick(restaurantId);
          }}
        ></RestaurantTabContainer>
      ))}
    </div>
  );
};
