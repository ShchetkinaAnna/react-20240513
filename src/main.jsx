import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { Layout } from './components/layout/component';
import { store } from './redux';

import './styles/normalize.css';
import { Restaurants } from './components/restaurants/component';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Layout>
      <Restaurants />
    </Layout>
  </Provider>,
);
