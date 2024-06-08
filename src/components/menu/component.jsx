import { DishContainer } from '../dish/container';

import styles from './styles.module.css';

/* eslint-disable react/jsx-key */
export const Menu = ({ dishIds }) => {
  if (!dishIds) {
    return '';
  }

  return (
    <div className={styles.menu}>
      <h3>Меню</h3>
      {dishIds.map((dishId) => (
        <DishContainer id={dishId} className={styles.menu__item} />
      ))}
    </div>
  );
};
