import { useGetMenuByRestaurantIdQuery } from '../../redux/service/api';
import { DishContainer } from '../dish/container';

import styles from './styles.module.css';

/* eslint-disable react/jsx-key */
export const Menu = ({ restaurantId }) => {
  const { data: menu, isFetching } = useGetMenuByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!menu) {
    return '';
  }

  return (
    <div className={styles.menu}>
      <h3>Меню</h3>
      {menu.map((dish) => (
        <DishContainer dish={dish} className={styles.menu__item} />
      ))}
    </div>
  );
};
