import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Root: FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Root;
