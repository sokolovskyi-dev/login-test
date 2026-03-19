import { Outlet } from 'react-router';

import FloatingDockDemo from '@/components/floating-dock-demo';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { Button, LoginButton } from '@/components/ui/button';

export function Component() {
  return (
    <>
      <header className="relative">
        <nav>
          <FloatingDockDemo />
        </nav>
        <div className="absolute top-8 right-8 flex items-center gap-4">
          <AnimatedThemeToggler />
          <LoginButton />
        </div>
      </header>
      <div className="p-8">
        <Outlet />
      </div>
    </>
  );
}
Component.displayName = 'ProtectedLayout';
