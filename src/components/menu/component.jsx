import { Dish } from "../dish/component";

/* eslint-disable react/jsx-key */
export const Menu = ({ menu }) => {
  if (!menu) {
    return "";
  }

  return (
    <div>
      <h3>Меню</h3>
      <ul>
      {menu.map((dish) => (
        <li>
          <Dish dish={dish} />
        </li>
      ))}
      </ul>
    </div>
  );
};