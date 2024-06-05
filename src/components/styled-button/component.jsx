import classNames from 'classnames';

import { THEMES } from '../../contexts/theme/constants';
import { useTheme } from '../../contexts/theme/hooks';

import styles from './styles.module.css';

export const StyledButton = ({ children, ...props }) => {
  const { activeTheme } = useTheme();

  const propsWithStyled = {
    ...props,
    className: classNames(props.className, styles.button, {
      [styles.button_light]: activeTheme === THEMES.light,
      [styles.button_dark]: activeTheme !== THEMES.light,
    }),
  };

  return <button {...propsWithStyled}>{children}</button>;
};
