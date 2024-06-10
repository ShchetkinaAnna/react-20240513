import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { Layout } from './components/layout/component';
import { store } from './redux';

import './styles/normalize.css';
import { RestaurantsContainer } from './components/restaurants/container';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Layout>
      <RestaurantsContainer />
    </Layout>
  </Provider>,
);
