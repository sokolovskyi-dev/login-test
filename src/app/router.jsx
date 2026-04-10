import { createBrowserRouter, redirect } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('../routes/root-layout'),
    children: [
      {
        path: 'login',
        lazy: () => import('../routes/auth/login'),
      },
      {
        path: 'registration',
        lazy: () => import('../routes/auth/registration'),
      },
      {
        lazy: () => import('../routes/private-route'),
        children: [
          {
            lazy: () => import('../routes/protected/layout'),
            children: [
              {
                index: true,
                loader: () => redirect('/home'),
              },
              {
                path: 'home',
                lazy: () => import('../routes/protected/home'),
              },
            ],
          },
        ],
      },
    ],
  },
]);

// import { createBrowserRouter, Navigate } from 'react-router-dom';

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     lazy: () => import('../routes/root-layout'),
//     children: [
//       {
//         path: 'login',
//         lazy: () => import('../routes/shared/login'),
//       },
//       {
//         path: 'registration',
//         lazy: () => import('../routes/shared/registration'),
//       },
//       {
//         lazy: () => import('../routes/private-route'),
//         children: [
//           {
//             path: '/',
//             lazy: () => import('../routes/protected/layout'),
//             children: [
//               {
//                 index: true,
//                 element: <Navigate to="/home" replace />,
//               },
//               {
//                 path: 'home',
//                 lazy: () => import('../routes/protected/home'),
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ]);
