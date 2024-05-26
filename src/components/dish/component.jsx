import { useCallback, useState } from "react";

const MAX_DISHES = 5;
const MIN_DISHES = 0;

const useCount = () => {
  const [count, setCount] = useState(MIN_DISHES); 

  const increment = useCallback(() => {
    setCount((currentCount) => currentCount + 1);
  }, []);
  
  const decrement = useCallback(() => {
    setCount((currentCount) => currentCount - 1);
  }, []);

  return { count, increment, decrement };
}

export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount(); 

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