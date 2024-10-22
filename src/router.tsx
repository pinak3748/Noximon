import { Children } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

import Root from './layouts/Root';
import { Home } from './pages/Home';

// New Page Route Import Goes Here!!!

// TODO: Add errorElement with sentry
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <RootBoundary />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
