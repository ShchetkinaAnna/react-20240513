import classNames from 'classnames';

import { useUser } from '../../contexts/user/hooks';
import { useCount } from '../../hooks/use-count';
import { StyledButton } from '../styled-button/component';

import styles from './styles.module.css';

const MAX_DISHES = 5;
const MIN_DISHES = 0;

export const Dish = ({ dish, className }) => {
  const { count, increment, decrement } = useCount(MIN_DISHES);
  const { user } = useUser();

  return (
    <div className={classNames(styles.dish, className)}>
      <span>{dish.name}</span>
      <div>
        {user === '' ? null : (
          <StyledButton onClick={decrement} disabled={count === MIN_DISHES}>
            -
          </StyledButton>
        )}
        {count}
        {user === '' ? null : (
          <StyledButton onClick={increment} disabled={count === MAX_DISHES}>
            +
          </StyledButton>
        )}
      </div>
    </div>
  );
};
