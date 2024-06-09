import classNames from 'classnames';

import { Counter } from '../counter/component';

import styles from './styles.module.css';

export const Dish = ({ dish, count, className, increment, decrement, min, max }) => {
  return (
    <div className={classNames(styles.dish, className)}>
      <span>{dish.name}</span>
      <Counter value={count} increment={increment} decrement={decrement} min={min} max={max} />
    </div>
  );
};
