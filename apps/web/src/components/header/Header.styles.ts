import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #191919, #111111 90%);
  opacity: 0.9;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 20px - 20px);
  padding: 20px;
  border-bottom: 1px solid #fc3504;
  z-index: 900;
`;

export const StyledFPIconLink = styled(Link)`
  cursor: pointer;
`;
