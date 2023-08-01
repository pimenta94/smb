import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '~/components/header';

const Root: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
