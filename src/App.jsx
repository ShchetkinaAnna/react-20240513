import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { DishDetailContainer } from './components/dish-detail/container';
import { Layout } from './components/layout/component';
import { Menu } from './components/menu/component';
import { Restaurant } from './components/restaurant/component';
import { Reviews } from './components/reviews/component';
import { DishPage } from './pages/dish';
import { HomePage } from './pages/home';
import { RestaurantPage } from './pages/restaurants';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'restaurants',
        element: <RestaurantPage />,
        children: [
          {
            path: ':restaurantId',
            element: <Restaurant />,
            children: [
              { index: true, element: <Navigate to="menu" replace /> },
              { path: 'menu', element: <Menu /> },
              { path: 'reviews', element: <Reviews /> },
            ],
          },
        ],
      },
      {
        path: 'dish',
        element: <DishPage />,
        children: [{ path: ':dishId', element: <DishDetailContainer /> }],
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
