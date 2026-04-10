import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectIsLoggedIn, selectToken } from '@/redux/auth/selectors';

export function Component() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);

  if (!token || !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
Component.displayName = 'PrivateRoute';
