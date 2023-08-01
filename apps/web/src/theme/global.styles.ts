import { css } from '@emotion/react';

import customProperties from './custom-properties';
import * as media from './custom-media';

export default css`
  ${customProperties};

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    margin-top: var(--mobile-header-height);

    ${media.gteSmallMedia} {
      margin-top: var(--desktop-header-height);
    }
  }
`;
