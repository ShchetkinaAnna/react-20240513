import { useContext } from 'react';

import { ThemeContext } from '../../contexts/theme';
import { useCount } from '../../hooks/use-count';
import { StyledButton } from '../styled-button/component';

const MAX_DISHES = 5;
const MIN_DISHES = 0;

export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount(MIN_DISHES);
  const theme = useContext(ThemeContext);

  return (
    <div>
      <span>{dish.name}</span>
      <div>
        <StyledButton activeTheme={theme} onClick={decrement} disabled={count === MIN_DISHES}>
          -
        </StyledButton>
        {count}
        <StyledButton activeTheme={theme} onClick={increment} disabled={count === MAX_DISHES}>
          +
        </StyledButton>
      </div>
    </div>
  );
};
