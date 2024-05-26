import { Tab } from "../tab/component";

/* eslint-disable react/jsx-key */
export const RestaurantTabs = ({ restaurants, onTabClick, activeTabIndex }) => {
  if (!restaurants) {
    return '';
  }

  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Tab title={restaurant.name} isActive={index === activeTabIndex} onClick={() => (onTabClick(restaurant.id))}></Tab>
      ))}
    </div>
  )
};