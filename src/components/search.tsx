import React from 'react';

import { ScanSearch, SearchIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';

function Search({ ...props }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <React.Fragment>
      <Button
        variant="outline"
        className={cn(
          'relative h-10 w-full items-center justify-between gap-2 rounded-lg p-3 font-normal text-muted-foreground sm:w-[300px]'
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="flex items-center gap-2">
          <SearchIcon className="h-4 w-4 text-primary" />
          <span>Search</span>
        </span>
        <kbd className="pointer-events-none hidden h-6 select-none items-center rounded bg-background p-2 text-sm font-medium leading-none sm:flex">
          ⌘+<span className="text-[10px]">K</span>
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search (minimum 2 characters)"
          onValueChange={setValue}
          value={value}
        />
        <CommandList className="py-2 lg:max-h-[364px]">
          {!(value.length >= 2) && (
            <div className="flex flex-col items-center justify-center gap-4 px-4 py-16 pt-14 text-center">
              <ScanSearch className="h-8 w-8 text-primary" />
              <p className="w-72  text-base font-medium leading-tight">
                Explore more than 8000+ suppliers and distributors
              </p>
              <p className="w-72 text-base text-xs font-medium leading-tight">
                Try searching for a 'search' keyword
              </p>
            </div>
          )}

          {value.length >= 2 && (
            <CommandGroup heading="Suggestions">
              <CommandItem>search</CommandItem>
              <CommandItem>Search</CommandItem>
              <CommandItem>search</CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </React.Fragment>
  );
}

export default Search;
