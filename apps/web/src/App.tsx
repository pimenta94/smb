import React, { FC } from 'react';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';

import globalStyles from './theme/global.styles';
import muiTheme from './theme/mui-theme';
import { Routes } from './routes';

const App: FC = () => {
  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <Global styles={globalStyles} />
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;
