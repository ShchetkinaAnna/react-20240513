import { useParams } from 'react-router-dom';

import { useCart } from '../../hooks/use-cart';
import { useGetDishByIdQuery } from '../../redux/service/api';

import { DishDetail } from './component';

const MAX_DISHES = 5;
const MIN_DISHES = 0;

export const DishDetailContainer = () => {
  const { dishId } = useParams();

  const { data: dish, isFetching } = useGetDishByIdQuery(dishId);
  const { count, increment, decrement } = useCart(dish?.id);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!dish) {
    return '';
  }

  return (
    <DishDetail
      dish={dish}
      count={count}
      increment={increment}
      decrement={decrement}
      min={MIN_DISHES}
      max={MAX_DISHES}
    />
  );
};
