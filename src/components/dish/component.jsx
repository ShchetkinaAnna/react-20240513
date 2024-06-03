import { useContext } from 'react';

import { UserContext } from '../../contexts/user';
import { useCount } from '../../hooks/use-count';
import { StyledButton } from '../styled-button/component';

const MAX_DISHES = 5;
const MIN_DISHES = 0;

export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount(MIN_DISHES);
  const user = useContext(UserContext);

  return (
    <div>
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
