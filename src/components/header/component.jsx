import { AuthorizationButton } from '../authorization-button/component';
import { ButtonToggler } from '../button-toggler/component';
import { CartIndicatorContainer } from '../cart-indicator/container';

import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Header</h1>
      <CartIndicatorContainer />
      <AuthorizationButton />
      <ButtonToggler />
    </header>
  );
};
