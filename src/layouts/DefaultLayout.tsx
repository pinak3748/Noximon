import React from 'react';
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';

import {
  Heart,
  LayoutDashboard,
  LifeBuoy,
  Menu,
  PackageSearch,
  Users,
} from 'lucide-react';

import { Logo } from '@/assets/svg';
import { CreditsCard } from '@/components/credits-card';
import { Nav } from '@/components/nav';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { UserMenu } from '@/components/user-menu';
import { ROUTES } from '@/constants/routes';

function DefaultLayout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <React.Fragment>
      <div className="grid gap-6 py-6 lg:h-screen lg:grid-cols-[minmax(200px,_220px)_1fr_1fr_1fr_1fr] lg:py-0">
        <aside className="sticky top-6 hidden h-[calc(100dvh-48px)] flex-col justify-between pl-6 lg:col-span-1 lg:flex">
          <div>
            <Link to="/" className="mb-6 flex items-center gap-2">
              <Logo className="size-8" />
              <span className="text-lg font-semibold">Ionio </span>
            </Link>
            <Nav
              links={[
                {
                  title: 'Dashboard',
                  icon: PackageSearch,
                  subLinks: [
                    {
                      title: 'Dashboard 1',
                      to: ROUTES.DASHBOARD,
                      label: '9999',
                    },
                    {
                      title: 'Distributors',
                      to: ROUTES.DASHBOARD_2,
                      label: null,
                    },
                  ],
                },
                {
                  title: 'Explorer',
                  to: ROUTES.SEARCH,
                  icon: LayoutDashboard,
                },

                {
                  title: 'Favorites',
                  icon: Heart,
                  subLinks: [
                    {
                      title: 'Favorites 1',
                      to: ROUTES.FAVORITES,
                      label: '9999',
                    },
                    {
                      title: 'Favorites',
                      to: ROUTES.FAVORITES_2,
                      label: null,
                    },
                  ],
                },
              ]}
            />
          </div>
          <div>
            <CreditsCard className="mb-2" disabled={!true} />
            <UserMenu />
          </div>
          {/* <Separator orientation="vertical" className="absolute right-0 " /> */}
        </aside>
        <header className="flex justify-between px-3 lg:hidden">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="size-8 rotate-90" />
            <span className="text-lg font-semibold">Ionio</span>
          </Link>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="size-10">
                <Menu className="size-5 text-primary" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="pt-12">
              <ScrollArea className="relative flex h-screen flex-col justify-between">
                <Nav
                  links={[
                    {
                      title: 'Dashboard',
                      icon: PackageSearch,
                      subLinks: [
                        {
                          title: 'Dashboard 1',
                          to: ROUTES.DASHBOARD,
                          label: '9999',
                        },
                        {
                          title: 'Distributors',
                          to: ROUTES.DASHBOARD_2,
                          label: null,
                        },
                      ],
                    },
                    {
                      title: 'Explorer',
                      to: ROUTES.SEARCH,
                      icon: LayoutDashboard,
                    },

                    {
                      title: 'Favorites',
                      icon: Heart,
                      subLinks: [
                        {
                          title: 'Favorites 1',
                          to: ROUTES.FAVORITES,
                          label: '9999',
                        },
                        {
                          title: 'Favorites',
                          to: ROUTES.FAVORITES_2,
                          label: null,
                        },
                      ],
                    },
                  ]}
                />
                <div className="absolute bottom-14 w-full">
                  <CreditsCard className="mb-2" />
                  <UserMenu />
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </header>
        <main className="relative overflow-y-auto lg:col-span-4">
          <div className="border-l-[1px] border-gray-200 p-4 lg:p-5">
            <Outlet />
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default DefaultLayout;
