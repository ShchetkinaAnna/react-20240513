import { AuthorizationButton } from '../authorization-button/component';
import { ButtonToggler } from '../button-toggler/component';

export const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ flexGrow: 1 }}>Header</h1>
      <AuthorizationButton />
      <ButtonToggler />
    </header>
  );
};
