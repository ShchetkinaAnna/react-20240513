import { THEMES } from '../../contexts/theme/constants';
import { useTheme } from '../../contexts/theme/hooks';

export const StyledButton = ({ children, ...props }) => {
  const { activeTheme } = useTheme();

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
