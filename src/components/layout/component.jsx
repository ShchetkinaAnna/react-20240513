import { ThemeContextProvider } from '../../contexts/theme/provider';
import { UserContextProvider } from '../../contexts/user/provider';
import { Footer } from '../footer/component';
import { Header } from '../header/component';
import { ScrollProgressBar } from '../scroll-progress-bar/component';

export const Layout = ({ children }) => {
  return (
    <div>
      <div id="modal" style={{ position: 'relative', zIndex: 2 }}></div>
      <div style={{ zIndex: 1 }}>
        <UserContextProvider>
          <ThemeContextProvider>
            <ScrollProgressBar />
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeContextProvider>
        </UserContextProvider>
      </div>
    </div>
  );
};
