import { useSelector } from 'react-redux';

import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';
import { Tab } from '../tab/component';

export const RestaurantTabContainer = ({ id, onClick, isActive }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  return <Tab onClick={onClick} isActive={isActive} title={restaurant.name}></Tab>;
};
