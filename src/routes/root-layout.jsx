import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { useRefreshUserQuery } from '@/api/authApi';
import { Spinner } from '@/components/ui/spinner';
import { logOut, refreshUser } from '@/redux/auth/authSlice';
import { selectToken } from '@/redux/auth/selectors';

export function Component() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const { data, error, isLoading, isFetching } = useRefreshUserQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (data) {
      dispatch(refreshUser(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(logOut());
    }
  }, [dispatch, error]);

  if (token && (isLoading || isFetching)) {
    return (
      <div className="mt-20 flex items-center justify-center gap-2">
        <Spinner />
        <p>Loading...</p>
      </div>
    );
  }

  return <Outlet />;
}

Component.displayName = 'RootLayout';
