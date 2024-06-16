import { Counter } from '../counter/component';

/* eslint-disable react/jsx-key */
export const DishDetail = ({ dish, count, increment, decrement, min, max }) => {
  return (
    <div>
      <div>Наименование блюда: {dish.name}</div>
      <div>Цена: {dish.price}</div>
      <div>Ингредиенты:</div>
      <ul>
        {dish.ingredients.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
      <Counter value={count} increment={increment} decrement={decrement} min={min} max={max} />
    </div>
  );
};
