import { css } from '@emotion/react';

import customProperties from './custom-properties';

export default css`
  ${customProperties};

  body {
    margin: 0;
    color: white;
    background: linear-gradient(to right, #191919, #111111 90%);

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    margin: 16px 24px;
  }
`;
