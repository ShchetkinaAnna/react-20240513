import { StyledButton } from '../styled-button/component';

export const ButtonToggler = ({ onClick, title }) => {
  return (
    <StyledButton style={{ height: '30px' }} onClick={onClick}>
      {title}
    </StyledButton>
  );
};
