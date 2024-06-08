import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Tab } from '../tab/component';

const DEFAULT_TAB_INDEX = 0;

/* eslint-disable react/jsx-key */
export const RestaurantTabs = ({ onTabClick }) => {
  const restaurants = useSelector((state) => state.restaurant.entities);
  const restaurantIds = useSelector((state) => state.restaurant.ids);
  const [activeTabIndex, setActiveTabIndex] = useState(DEFAULT_TAB_INDEX);

  useEffect(() => {
    if (restaurantIds.length === 0) {
      return;
    }

    onTabClick(restaurantIds[DEFAULT_TAB_INDEX]);
  }, [restaurantIds, onTabClick]);

  return (
    <div>
      {restaurantIds.map((restaurantId, index) => (
        <Tab
          title={restaurants[restaurantId].name}
          isActive={index === activeTabIndex}
          onClick={() => {
            setActiveTabIndex(index);
            onTabClick(restaurantId);
          }}
        ></Tab>
      ))}
    </div>
  );
};
