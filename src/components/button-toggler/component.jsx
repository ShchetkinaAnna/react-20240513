import { THEMES } from '../../contexts/theme/constants';
import { useTheme } from '../../contexts/theme/hooks';
import { StyledButton } from '../styled-button/component';

export const ButtonToggler = () => {
  const { activeTheme, toggleTheme } = useTheme();

  return (
    <StyledButton onClick={toggleTheme}>
      {activeTheme === THEMES.light ? 'Тёмная тема' : 'Светлая тема'}
    </StyledButton>
  );
};
