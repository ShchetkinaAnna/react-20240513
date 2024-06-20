import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { Counter } from '../counter/component';

import styles from './styles.module.css';

export const Dish = ({ dish, count, className, increment, decrement, min, max }) => {
  const navigate = useNavigate();

  return (
    <div className={classNames(styles.dish, className)}>
      <div>
        <div>Наименование блюда:</div>
        <span className={styles.dish__name} onClick={() => navigate(`/dish/${dish.id}`)}>
          {dish.name}
        </span>
      </div>
      <Counter value={count} increment={increment} decrement={decrement} min={min} max={max} />
    </div>
  );
};
