import { StyledButton } from '../styled-button/component';

import styles from './styles.module.css';

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <StyledButton onClick={onClick} disabled={isActive} className={styles.tab}>
      {title}
    </StyledButton>
  );
};
