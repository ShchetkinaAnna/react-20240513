import { DishContainer } from '../dish/container';

import styles from './styles.module.css';

/* eslint-disable react/jsx-key */
export const Menu = ({ ids }) => {
  if (!ids) {
    return '';
  }

  return (
    <div className={styles.menu}>
      <h3>Меню</h3>
      {ids.map((id) => (
        <DishContainer id={id} className={styles.menu__item} />
      ))}
    </div>
  );
};
