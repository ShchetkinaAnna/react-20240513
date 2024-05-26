import { useState } from "react";
import { Counter } from "../counter/component";

const MAX_DISHES = 5;
const MIN_DISHES = 0;

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(MIN_DISHES);

  return (
    <div>
      <span>{dish.name}</span>
      <Counter min={MIN_DISHES} max={MAX_DISHES} value={count} onChange={setCount}/>
    </div>
  );
};