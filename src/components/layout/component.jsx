import { Outlet } from 'react-router-dom';

import { ThemeContextProvider } from '../../contexts/theme/provider';
import { UserContextProvider } from '../../contexts/user/provider';
import { Footer } from '../footer/component';
import { Header } from '../header/component';
import { ScrollProgressBarContainer } from '../scroll-progress-bar/container';

export const Layout = () => {
  return (
    <div>
      <div id="modal" style={{ position: 'relative', zIndex: 2 }}></div>
      <div style={{ zIndex: 1 }}>
        <UserContextProvider>
          <ThemeContextProvider>
            <ScrollProgressBarContainer />
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </ThemeContextProvider>
        </UserContextProvider>
      </div>
    </div>
  );
};
