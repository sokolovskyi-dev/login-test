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

// root - layout.jsx;
// import { useEffect } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { Outlet } from 'react-router-dom';

// import { useRefreshUserQuery } from '@/api/authApi';
// import { logOut, refreshUser } from '@/redux/auth/authSlice';
// import { selectToken } from '@/redux/auth/selectors';

// export function Component() {
//   const dispatch = useDispatch();
//   const token = useSelector(selectToken);

//   const { data, error, isLoading, isFetching } = useRefreshUserQuery(undefined, {
//     skip: !token,
//   });

//   useEffect(() => {
//     if (data) {
//       dispatch(refreshUser(data));
//     }
//   }, [data, dispatch]);

//   useEffect(() => {
//     if (error) {
//       dispatch(logOut());
//     }
//   }, [error, dispatch]);

//   if (token && (isLoading || isFetching)) {
//     return <div>Loading...</div>;
//   }

//   return <Outlet />;
// }

// Component.displayName = 'RootLayout';

//------------------------------------

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

// private-route.jsx
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';

// import { selectIsLoggedIn, selectToken } from '@/redux/auth/selectors';

// export function Component() {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const token = useSelector(selectToken);

//   if (!token || !isLoggedIn) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Outlet />;
// }

// Component.displayName = 'PrivateRoute';
