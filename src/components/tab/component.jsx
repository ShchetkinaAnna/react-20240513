import { useContext } from 'react';

import { ThemeContext } from '../../contexts/theme';
import { StyledButton } from '../styled-button/component';

export const Tab = ({ title, onClick, isActive }) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledButton activeTheme={theme} onClick={onClick} disabled={isActive}>
      {title}
    </StyledButton>
  );
};
