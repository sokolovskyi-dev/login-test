import React from 'react';

import {
  IconAddressBook,
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from '@tabler/icons-react';

import { FloatingDock } from '@/components/ui/floating-dock';

export default function FloatingDockDemo() {
  const links = [
    {
      title: 'Home',
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '/home',
    },

    {
      title: 'Contacts',
      icon: <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '/contacts',
    },
    // {
    //   title: 'Components',
    //   icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    //   href: '',
    // },
    // {
    //   title: 'Aceternity UI',
    //   icon: (
    //     <img
    //       src="https://assets.aceternity.com/logo-dark.png"
    //       width={20}
    //       height={20}
    //       alt="Aceternity Logo"
    //     />
    //   ),
    //   href: '',
    // },
    // {
    //   title: 'Changelog',
    //   icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    //   href: '',
    // },

    // {
    //   title: 'Twitter',
    //   icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    //   href: '',
    // },
    {
      title: 'GitHub',
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '',
    },
  ];

  return (
    <div className="mt-4 flex w-full items-center justify-center">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
