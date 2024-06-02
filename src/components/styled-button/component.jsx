import { THEMES } from '../../constants/themes';

export const StyledButton = ({ children, activeTheme, ...props }) => {
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
