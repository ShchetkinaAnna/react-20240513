import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from '../../redux/ui/cart';
import { selectDishCount } from '../../redux/ui/cart/selectors';

import { Dish } from './component';

const MAX_DISHES = 5;
const MIN_DISHES = 0;

export const DishContainer = ({ dish, ...props }) => {
  const count = useSelector((state) => selectDishCount(state, dish.id));

  const dispatch = useDispatch();
  const handleIncrement = useCallback(() => dispatch(increment(dish.id)), [dispatch, dish.id]);
  const handleDecrement = useCallback(() => dispatch(decrement(dish.id)), [dispatch, dish.id]);

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
