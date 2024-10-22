import React from 'react';
import { Outlet } from 'react-router-dom';

import { Toaster } from '@/components/ui/toaster';

function Root() {
  return (
    <React.Fragment>
      <Toaster />
      <Outlet />
    </React.Fragment>
  );
}

export default Root;
