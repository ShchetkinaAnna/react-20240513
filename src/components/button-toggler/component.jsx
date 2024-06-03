import { useContext } from 'react';

import { THEMES } from '../../constants/themes';
import { ThemeContext } from '../../contexts/theme';
import { StyledButton } from '../styled-button/component';

export const ButtonToggler = ({ onClick }) => {
  const activeTheme = useContext(ThemeContext);

  return (
    <StyledButton style={{ height: '30px' }} onClick={onClick}>
      {activeTheme === THEMES.light ? 'Светлая тема' : 'Тёмная тема'}
    </StyledButton>
  );
};
