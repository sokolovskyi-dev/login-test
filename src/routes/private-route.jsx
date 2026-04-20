import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { Spinner } from '@/components/ui/spinner';
import { selectIsLoggedIn, selectToken } from '@/redux/auth/selectors';

export function Component() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (token && !isLoggedIn) {
    return (
      <div className="mt-20 flex items-center justify-center gap-2">
        <Spinner />
        <p>Loading...</p>
      </div>
    );
  }

  if (token && isLoggedIn) {
    return <Outlet />;
  }
}
Component.displayName = 'PrivateRoute';
