import { AuthorizationButton } from '../authorization-button/component';
import { ButtonToggler } from '../button-toggler/component';

export const Header = ({ setTheme, setUser }) => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ flexGrow: 1 }}>Header</h1>
      <AuthorizationButton setUser={setUser} />
      <ButtonToggler onClick={setTheme} />
    </header>
  );
};
