import React, { FC } from 'react';

// Components
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import FPIcon from '~/components/icons/FP-Icon';

import { StyledHeader, StyledFPIconLink } from './Header.styles';

const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledFPIconLink to="/">
        <FPIcon />
      </StyledFPIconLink>
      <IconButton aria-label="burger-menu" color="primary">
        <MenuIcon fontSize="large" />
      </IconButton>
    </StyledHeader>
  );
};

export default Header;
