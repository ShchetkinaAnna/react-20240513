import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement } from '../redux/ui/cart';
import { selectDishCount } from '../redux/ui/cart/selectors';

export const useCart = (dishId) => {
  const count = useSelector((state) => selectDishCount(state, dishId));

  const dispatch = useDispatch();
  const handleIncrement = useCallback(() => dispatch(increment(dishId)), [dispatch, dishId]);
  const handleDecrement = useCallback(() => dispatch(decrement(dishId)), [dispatch, dishId]);

  return { count, increment: handleIncrement, decrement: handleDecrement };
};
