import React from 'react';

import Search from '@/components/search';
import { Separator } from '@/components/ui/separator';

function Header({
  heading = '',
  isSearchBarVisible = true,
}: {
  heading?: string;
  isSearchBarVisible?: boolean;
}) {
  return (
    <React.Fragment>
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold text-accent-foreground">
            {heading}
          </h1>
        </div>
        {isSearchBarVisible && (
          <div className="flex w-full gap-4 sm:w-auto">
            <Search />
          </div>
        )}
      </header>
      <Separator className="mt-4" />
    </React.Fragment>
  );
}

export default Header;
