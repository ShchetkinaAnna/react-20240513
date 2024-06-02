import { useState } from 'react';

import { THEMES } from '../../constants/themes';
import { ThemeContext } from '../../contexts/theme';
import { Footer } from '../footer/component';
import { Header } from '../header/component';
import { ScrollProgressBar } from '../scroll-progress-bar/component';

export const Layout = ({ children }) => {
  const [activeTheme, setTheme] = useState(THEMES.light);

  return (
    <div>
      <ScrollProgressBar />
      <Header
        activeTheme={activeTheme}
        setTheme={() => {
          setTheme(activeTheme === THEMES.light ? THEMES.dark : THEMES.light);
        }}
      />
      <ThemeContext.Provider value={activeTheme}>
        <main>{children}</main>
      </ThemeContext.Provider>
      <Footer />
    </div>
  );
};
