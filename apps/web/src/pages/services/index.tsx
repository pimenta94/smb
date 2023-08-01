import React from 'react';

import { RouteObject } from 'react-router-dom';

import Services from './Services';

export default (): RouteObject[] => [
  {
    path: 'servicos',
    element: <Services />,
  },
];
