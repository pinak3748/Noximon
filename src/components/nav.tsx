import { FC, ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { buttonVariants } from './ui/button';

interface Link {
  title: string;
  to?: string;
  label?: ReactNode;
  icon?: LucideIcon;
  subLinks?: Link[];
  blank?: boolean;
  disabled?: boolean;
}
interface Props {
  links: Link[];
  disabled?: boolean;
}

export const Nav: FC<Props> = ({ links, disabled }) => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className="grid gap-1">
        {links.map((link) => (
          <li key={link.title}>
            {link.subLinks ? (
              <>
                <NavLink
                  to={link.subLinks[0].to!}
                  className={cn(
                    'mb-2 flex h-9 items-center gap-2 rounded-lg px-3 text-sm font-medium text-muted-foreground',
                    link.subLinks.some((subLink) =>
                      pathname.includes(subLink.to ?? '/')
                    ) && 'bg-card text-primary shadow'
                  )}
                >
                  {link.icon && <link.icon size={16} strokeWidth={2} />}
                  {link.title}
                </NavLink>
                <ul className="pl-4">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.title}>
                      <NavLink
                        to={subLink.to ?? '/'}
                        target={link.blank ? '_blank' : '_self'}
                        className={({ isActive }) =>
                          cn(
                            buttonVariants({
                              variant: 'ghost',
                              size: 'sm',
                            }),
                            'flex justify-start gap-2 rounded-none border-l-[1.5px] pl-2 transition-all hover:bg-transparent',
                            isActive &&
                              'active group border-primary text-primary hover:border-primary hover:text-primary',
                            (subLink.disabled || disabled) &&
                              'pointer-events-none cursor-not-allowed'
                          )
                        }
                      >
                        {subLink.title}
                        {subLink.label && !disabled && (
                          <span className="ml-auto block rounded-md bg-secondary-foreground/5 p-1 text-xs text-secondary-foreground group-[.active]:bg-primary/5 group-[.active]:text-primary">
                            {subLink.label}
                          </span>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <NavLink
                to={link.to ?? '/'}
                target={link.blank ? '_blank' : '_self'}
                className={({ isActive }) =>
                  cn(
                    buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    }),
                    'flex justify-start gap-2 ',
                    isActive &&
                      'bg-card text-primary  shadow  hover:bg-card hover:text-primary',
                    (link.disabled || disabled) &&
                      'pointer-events-none cursor-not-allowed'
                  )
                }
              >
                {link.icon && <link.icon size={16} strokeWidth={2} />}
                {link.title}
                {link.label && <span className="ml-auto  ">{link.label}</span>}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
