import { useSelector } from 'react-redux';

import { selectDishById } from '../../redux/entities/dish/selectors';

import { Dish } from './component';

export const DishContainer = ({ id, ...props }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return '';
  }

  return <Dish {...props} dish={dish} />;
};
