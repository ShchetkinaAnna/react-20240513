import { useState } from 'react';

import { THEMES } from '../../constants/themes';
import { ThemeContext } from '../../contexts/theme';
import { UserContext } from '../../contexts/user';
import { Footer } from '../footer/component';
import { Header } from '../header/component';
import { ScrollProgressBar } from '../scroll-progress-bar/component';

export const Layout = ({ children }) => {
  const [activeTheme, setTheme] = useState(THEMES.light);
  const [user, setUser] = useState('');

  return (
    <div>
      <div id="modal" style={{ position: 'relative', zIndex: 2 }}></div>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={activeTheme}>
          <ScrollProgressBar />
          <Header
            setTheme={() => {
              setTheme(activeTheme === THEMES.light ? THEMES.dark : THEMES.light);
            }}
            setUser={setUser}
          />
          <main>{children}</main>
          <Footer />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
};
