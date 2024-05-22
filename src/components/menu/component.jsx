import { Dish } from "../dish/component";

/* eslint-disable react/jsx-key */
export const Menu = ({ menu, callbackMenuOrder }) => {
  if (!menu) {
    return "";
  }

  const callbackDishOrder = (id, value) => {
    callbackMenuOrder(id, value);
  };

  return (
    <div>
      <h3>Меню</h3>
      <ul>
      {menu.map((dish) => (
        <li>
          <Dish dish={dish} callbackDishOrder={(value) => callbackDishOrder(dish.id, value)} />
        </li>
      ))}
      </ul>
    </div>
  );
};