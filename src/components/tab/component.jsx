import { StyledButton } from '../styled-button/component';

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <StyledButton onClick={onClick} disabled={isActive}>
      {title}
    </StyledButton>
  );
};
