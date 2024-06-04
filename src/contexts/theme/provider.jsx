import { useMemo, useState } from 'react';

import { THEMES } from './constants';
import { ThemeContext } from './context';

export const ThemeContextProvider = ({ children }) => {
  const [activeTheme, setTheme] = useState(THEMES.light);
  const contextValue = useMemo(
    () => ({
      activeTheme,
      toggleTheme: () => {
        setTheme(activeTheme === THEMES.light ? THEMES.dark : THEMES.light);
      },
    }),
    [activeTheme],
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
