import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { useRefreshUserQuery } from '@/api/authApi';
import { AuthNav } from '@/components/AuthNav/AuthNav';
import FloatingDockDemo from '@/components/floating-dock-demo';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { Button, LoginButton } from '@/components/ui/button';
import { UserMenu } from '@/components/UserMenu/UserMenu';
import { refreshUser } from '@/redux/auth/authSlice';
import { selectIsLoggedIn, selectIsRefreshing, selectToken } from '@/redux/auth/selectors';

export function Component() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const { data, isLoading, error } = useRefreshUserQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (data) {
      dispatch(refreshUser(data));
    }
  }, [data, dispatch]);

  return (
    <>
      <header className="relative">
        <nav>
          <FloatingDockDemo />
        </nav>
        <div className="absolute top-8 right-8 flex items-center gap-4">
          <AnimatedThemeToggler />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>
      <div className="p-8">
        <Outlet />
      </div>
    </>
  );
}
Component.displayName = 'ProtectedLayout';
