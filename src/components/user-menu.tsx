import { Link, useNavigate } from 'react-router-dom';

import { CreditCard, LogOut, MoreVertical } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ROUTES } from '@/constants/routes';

export const UserMenu = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate(ROUTES.SIGN_IN, { replace: true });
  };

  return (
    <div className="flex items-center gap-4 lg:justify-between">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage alt={'Pinak'} />
          <AvatarFallback className="bg-card">
            {'Pinak'.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-sm font-medium">{'Pinak'}</h3>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="bg-card shadow-sm  hover:bg-card hover:text-primary"
          >
            <MoreVertical size="16" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>
            <div className="text-sm font-medium text-foreground">{'Pinak'}</div>
            <div className="text-xs font-normal text-muted-foreground">
              {'pinak@ioio.io'}
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link to={ROUTES.DASHBOARD}>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Subscription</span>
              </Link>
            </DropdownMenuItem>
            {/* <DropdownMenuItem asChild>
              <Link to={ROUTES.SETTINGS}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem> */}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
