import { useCount } from "../../hooks/use-count";

const MAX_DISHES = 5;
const MIN_DISHES = 0;

export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount(MIN_DISHES); 

  return (
    <div>
      <span>{dish.name}</span>
      <div>
        <button onClick={decrement} disabled={count === MIN_DISHES}>-</button>
        {count}
        <button onClick={increment} disabled={count === MAX_DISHES}>+</button>
      </div>
    </div>
  );
};