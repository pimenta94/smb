import React, { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './pages/root';
import Home from './pages/home';
import Services from './pages/services';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'servicos',
          element: <Services />,
        },
      ],
    },
  ],
  { basename: '/' }
);

export const Routes: FC = () => <RouterProvider router={router} />;
