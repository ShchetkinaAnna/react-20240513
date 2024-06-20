import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.css';

export const Tab = ({ title, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.tab_link, { [styles.tab_link__active]: isActive })
      }
    >
      {title}
    </NavLink>
  );
};
