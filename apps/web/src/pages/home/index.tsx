import React from 'react';

import { RouteObject } from 'react-router-dom';

import Home from './Home';

export default (): RouteObject[] => [
  {
    path: '',
    element: <Home />,
  },
];
