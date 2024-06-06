import { Dish } from '../dish/component';

import styles from './styles.module.css';

/* eslint-disable react/jsx-key */
export const Menu = ({ menuIds }) => {
  if (!menuIds) {
    return '';
  }

  return (
    <div className={styles.menu}>
      <h3>Меню</h3>
      {menuIds.map((dishId) => (
        <Dish dishId={dishId} className={styles.menu__item} />
      ))}
    </div>
  );
};
