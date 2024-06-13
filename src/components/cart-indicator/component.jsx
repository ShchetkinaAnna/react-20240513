import { StyledButton } from '../styled-button/component';

export const CartIndicator = ({ count, onClearClick }) => {
  return (
    <div>
      <span>Cart: {count}</span>
      {count > 0 && <StyledButton onClick={onClearClick}>Clear</StyledButton>}
    </div>
  );
};
