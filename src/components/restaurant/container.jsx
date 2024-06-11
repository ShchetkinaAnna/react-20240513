import { useSelector } from 'react-redux';

import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';

import { Restaurant } from './component';

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return '';
  }

  return <Restaurant restaurant={restaurant} />;
};
