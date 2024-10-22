import { FC } from 'react';

import { BadgePlus } from 'lucide-react';

import { CreditIcon } from '@/assets/svg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface CreditsCardProps extends React.ComponentProps<typeof Card> {
  disabled?: boolean;
}

export const CreditsCard: FC<CreditsCardProps> = ({ disabled, ...props }) => {
  return (
    <Card {...props}>
      <CardHeader className="p-4">
        <CardTitle className="flex items-center gap-1.5 text-sm">
          <CreditIcon className="h-5 w-5" />
          Credits
          <span className="ml-auto block rounded-md bg-primary p-1 px-1.5 text-xs font-semibold leading-3 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.20)_inset,_0_-1px_0_0_rgba(0,0,0,0.10)_inset,_0_0_0_4px_rgba(255,255,255,0.07),_0_0_5px_0_rgba(253,178,7,0.10)]">
            {1000}
          </span>
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className=" p-4 text-muted-foreground">
        <p className="mb-2 flex text-xs font-medium">
          Monthly Balance <span className="ml-auto">{999}</span>
        </p>
        <p className="mb-3 flex text-xs font-medium">
          Add-On Credits <span className="ml-auto">{100}</span>
        </p>
        {/* <DialogTrigger asChild> */}
        <Button className="w-full" size="sm" disabled={disabled}>
          <BadgePlus className="mr-[6px]" size={14} />
          Add Credits
        </Button>
        {/* </DialogTrigger> */}
      </CardContent>
    </Card>
  );
};
