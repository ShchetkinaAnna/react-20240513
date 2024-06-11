import { useUser } from '../../contexts/user/hooks';
import { StyledButton } from '../styled-button/component';

export const Counter = ({ value, increment, decrement, min = 0, max = 5 }) => {
  const { user } = useUser();

  return (
    <div>
      {user === '' ? null : (
        <StyledButton onClick={decrement} disabled={value === min}>
          -
        </StyledButton>
      )}
      {value}
      {user === '' ? null : (
        <StyledButton onClick={increment} disabled={value === max}>
          +
        </StyledButton>
      )}
    </div>
  );
};
