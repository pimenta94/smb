import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: linear-gradient(to right, #191919, #111111 90%);
  opacity: 0.9;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #fc3504;
`;

export const StyledFPIconLink = styled(Link)`
  cursor: pointer;
`;
