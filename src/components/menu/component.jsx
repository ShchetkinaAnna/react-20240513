import { Dish } from '../dish/component';

/* eslint-disable react/jsx-key */
export const Menu = ({ menuIds }) => {
  if (!menuIds) {
    return '';
  }

  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menuIds.map((dishId) => (
          <li>
            <Dish dishId={dishId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
