import styled from '@emotion/styled';

export const StyledContainer = styled.div``;

export const VideoContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  z-index: 10;
`;

export const DummyContainer = styled.div`
  height: 100vh;
`;

export const MenuContainer = styled.ul`
  position: absolute;
  top: 22%;
`;

export const MenuItem = styled.li`
  font-weight: bold;
  list-style: none;
  font-size: 20px;
  margin-bottom: 15px;
  color: white;
  text-shadow: #fc3504 1px 0 1px;
`;

export const AboutUsContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #191919, #111111 90%);
`;
