import React, { FC } from 'react';

import { StyledVideo } from './VideoPlayer.styles';

const VideoPlayer: FC = () => {
  return (
    <StyledVideo autoPlay muted loop playsInline>
      <source
        src="https://media.istockphoto.com/id/1180192057/pt/v%C3%ADdeo/close-up-portrait-shot-of-a-beautiful-confident-fitness-girl-in-black-athletic-top-and-shorts.mp4?s=mp4-640x640-is&k=20&c=JK0-O05aveICAjK9_uuF33rQyzu_o-iG42-0lkv3PjA="
        type="video/mp4"
      />
    </StyledVideo>
  );
};

export default VideoPlayer;
