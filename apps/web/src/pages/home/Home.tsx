import React, { FC } from 'react';

// Components
import VideoPlayer from '~/components/video-player/VideoPlayer';

import {
  StyledContainer,
  VideoContainer,
  DummyContainer,
  MenuContainer,
  MenuItem,
  Content,
  AboutUsContainer,
} from './Home.styles';

const Home: FC = () => {
  return (
    <StyledContainer>
      <VideoContainer>
        <VideoPlayer />
      </VideoContainer>
      <Content>
        <DummyContainer>
          <MenuContainer>
            <MenuItem>Quem Somos</MenuItem>
            <MenuItem>Espaço</MenuItem>
            <MenuItem>Serviços</MenuItem>
            <MenuItem>Outros</MenuItem>
          </MenuContainer>
        </DummyContainer>
        <AboutUsContainer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at magna
          dolor. Curabitur accumsan ultricies posuere. Ut a malesuada ipsum.
          Phasellus egestas diam ut neque sagittis maximus. Mauris porttitor et
          sapien id bibendum. Aenean lobortis vestibulum massa, in elementum mi
          finibus vel. Nullam non orci ac massa iaculis mollis id ut quam.
          Vivamus et egestas nisl. Suspendisse eget arcu fringilla, dapibus
          augue id, bibendum lorem. Suspendisse urna elit, sodales commodo risus
          non, rhoncus faucibus eros. Suspendisse eros leo, placerat tempus nisi
          vel, cursus ultrices libero. Proin vitae nibh sit amet mi imperdiet
          porta. Nam tristique, magna ut consequat dignissim, arcu massa
          molestie est, sit amet facilisis nisl sapien non lacus. Donec in
          ultricies arcu. Morbi aliquet eleifend est, vitae fermentum nisl
          ultricies eu.
        </AboutUsContainer>
      </Content>
    </StyledContainer>
  );
};

export default Home;
