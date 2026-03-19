import { createBrowserRouter, redirect } from 'react-router';

export const router = createBrowserRouter([
  { path: '/login', lazy: () => import('../routes/shared/login') },
  { path: '/registration', lazy: () => import('../routes/shared/registration') },

  {
    path: '/',
    lazy: () => import('../routes/protected/layout'),
    children: [
      { index: true, loader: () => redirect('/home') },
      {
        path: 'home',
        lazy: () => import('../routes/protected/home'),
      },
    ],
  },
]);
