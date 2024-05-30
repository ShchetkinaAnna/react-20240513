import { Footer } from '../footer/component';
import { Header } from '../header/component';
import { ScrollProgressBar } from '../scroll-progress-bar/component';

export const Layout = ({ children }) => {
  return (
    <div>
      <ScrollProgressBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
