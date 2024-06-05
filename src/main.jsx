import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { Layout } from './components/layout/component';
import { Restaurants } from './components/restaurants/component';
import { store } from './redux';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Layout>
      <Restaurants />
    </Layout>
  </Provider>,
);
