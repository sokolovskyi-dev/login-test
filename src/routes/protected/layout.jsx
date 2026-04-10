import { Outlet } from 'react-router-dom';

import FloatingDockDemo from '@/components/floating-dock-demo';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { UserMenu } from '@/components/UserMenu/UserMenu';

export function Component() {
  return (
    <>
      <header className="relative">
        <nav>
          <FloatingDockDemo />
        </nav>
        <div className="absolute top-8 right-8 flex items-center gap-4">
          <AnimatedThemeToggler />
          <UserMenu />
        </div>
      </header>
      <div className="p-8">
        <Outlet />
      </div>
    </>
  );
}
Component.displayName = 'ProtectedLayout';
