import React, { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './pages/root/Root';
import HomeRoutes from './pages/home';
import ServicesRoutes from './pages/services';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [...HomeRoutes(), ...ServicesRoutes()],
    },
  ],
  { basename: '/' }
);

export const Routes: FC = () => <RouterProvider router={router} />;
