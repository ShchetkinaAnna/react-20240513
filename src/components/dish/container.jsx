import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectDishById } from '../../redux/entities/dish/selectors';
import { decrement, increment } from '../../redux/ui/cart';
import { selectDishCount } from '../../redux/ui/cart/selectors';

import { Dish } from './component';

const MAX_DISHES = 5;
const MIN_DISHES = 0;

export const DishContainer = ({ id, ...props }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const count = useSelector((state) => selectDishCount(state, id));

  const dispatch = useDispatch();
  const handleIncrement = useCallback(() => dispatch(increment(id)), [dispatch, id]);
  const handleDecrement = useCallback(() => dispatch(decrement(id)), [dispatch, id]);

  if (!dish) {
    return '';
  }

  return (
    <Dish
      {...props}
      dish={dish}
      count={count}
      increment={handleIncrement}
      decrement={handleDecrement}
      min={MIN_DISHES}
      max={MAX_DISHES}
    />
  );
};
