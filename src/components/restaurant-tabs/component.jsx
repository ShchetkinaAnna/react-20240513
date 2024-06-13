import { Tab } from '../tab/component';

/* eslint-disable react/jsx-key */
export const RestaurantTabs = ({ restaurants, onTabClick, idActiveRestaurant }) => {
  if (!restaurants) {
    return;
  }

  return (
    <div>
      {restaurants.map(({ id, name }) => (
        <Tab
          onClick={() => {
            onTabClick(id);
          }}
          isActive={id === idActiveRestaurant}
          title={name}
        ></Tab>
      ))}
    </div>
  );
};
