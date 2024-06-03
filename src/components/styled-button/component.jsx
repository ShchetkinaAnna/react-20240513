import { useContext } from 'react';

import { THEMES } from '../../constants/themes';
import { ThemeContext } from '../../contexts/theme';

export const StyledButton = ({ children, ...props }) => {
  const activeTheme = useContext(ThemeContext);

  const propsWithStyled = {
    ...props,
    style: {
      ...props.style,
      backgroundColor: activeTheme === THEMES.light ? 'white' : 'black',
      color: activeTheme === THEMES.light ? 'black' : 'white',
    },
  };

  return <button {...propsWithStyled}>{children}</button>;
};
