import { THEMES } from '../../constants/themes';
import { ButtonToggler } from '../button-toggler/component';

export const Header = ({ setTheme, activeTheme }) => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Header</h1>
      <ButtonToggler
        title={activeTheme === THEMES.light ? 'Светлая тема' : 'Тёмная тема'}
        onClick={setTheme}
      />
    </header>
  );
};
