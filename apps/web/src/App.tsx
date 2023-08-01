import React, { FC } from 'react';
import { Global } from '@emotion/react';

import globalStyles from './theme/global.styles';
import { Routes } from './routes';

const App: FC = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Routes />
    </>
  );
};

export default App;
