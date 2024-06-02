import { useContext } from 'react';

import { THEMES } from '../../constants/themes';
import { ThemeContext } from '../../contexts/theme';
import { AuthorizationButton } from '../authorization-button/component';
import { ButtonToggler } from '../button-toggler/component';

export const Header = ({ setTheme, setUser }) => {
  const activeTheme = useContext(ThemeContext);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ flexGrow: 1 }}>Header</h1>
      <AuthorizationButton setUser={setUser} />
      <ButtonToggler
        title={activeTheme === THEMES.light ? 'Светлая тема' : 'Тёмная тема'}
        onClick={setTheme}
      />
    </header>
  );
};
