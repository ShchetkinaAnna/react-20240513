import { useCart } from '../../hooks/use-cart';

import { Dish } from './component';

const MAX_DISHES = 5;
const MIN_DISHES = 0;

export const DishContainer = ({ dish, ...props }) => {
  const { count, increment, decrement } = useCart(dish.id);

  if (!dish) {
    return '';
  }

  return (
    <Dish
      {...props}
      dish={dish}
      count={count}
      increment={increment}
      decrement={decrement}
      min={MIN_DISHES}
      max={MAX_DISHES}
    />
  );
};
