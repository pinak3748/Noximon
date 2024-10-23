import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GMAIL, GOOGLECHAT, SLACK } from '@/assets';
import { SubSectionHeading } from '@/components/custom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { AppDispatch, RootState } from '@/store';

import { setSlackToken } from '../../features/homeSlice';

export default function Channels() {
  const [slackTokenInput, setSlackTokenInput] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { toast } = useToast();
  const slackToken = useSelector((state: RootState) => state.home.slackToken);

  useEffect(() => {
    if (slackToken) {
      setSlackTokenInput(slackToken);
    }
  }, [slackToken]);

  const handleSave = () => {
    dispatch(setSlackToken(slackTokenInput));
    toast({
      title: 'Slack Token Saved',
      description: 'Your Slack token has been successfully saved.',
      variant: 'success',
    });
  };

  return (
    <div className="w-full max-w-full overflow-hidden text-gray-800">
      <SubSectionHeading
        heading="Notification Channels"
        subHeading="Connect and manage your preferred notification channels"
      />

      <Accordion type="single" collapsible className="mt-4 w-full space-y-4">
        <AccordionItem
          value="slack"
          className="rounded-lg border border-gray-200 bg-gray-50"
        >
          <AccordionTrigger className="px-4 py-2 hover:no-underline">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                <img src={SLACK} alt="Slack" className="mr-2 h-6 w-6" />
                <span className="text-left">Slack</span>
              </div>
              {slackToken && (
                <Badge
                  variant="secondary"
                  className="mr-2.5 bg-green-200 text-green-800"
                >
                  Connected
                </Badge>
              )}
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-medium">Access Token</label>
                <Input
                  placeholder="Enter Slack Access Token"
                  value={slackTokenInput}
                  onChange={(e) => setSlackTokenInput(e.target.value)}
                  className="w-full border-gray-300 focus:border-[#5271ff] focus:ring-[#5271ff]"
                  type="password"
                />
              </div>
              <a
                href="https://api.slack.com/apps/A06F0QUVBDX/incoming-webhooks?success=1"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#5271ff] hover:underline"
              >
                Where to get Slack Access Token?
              </a>
              <div className="flex space-x-2">
                <Button
                  onClick={handleSave}
                  disabled={!slackTokenInput}
                  className={cn(
                    'w-full bg-[#5271ff] text-white hover:bg-[#3e5bff]',
                    !slackTokenInput && 'cursor-not-allowed opacity-50'
                  )}
                >
                  {slackToken ? 'Update Token' : 'Save Token'}
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="google-chats"
          className="rounded-lg border border-gray-200 bg-gray-50"
        >
          <AccordionTrigger className="px-4 py-2 hover:no-underline">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                <img
                  src={GOOGLECHAT}
                  alt="Google Chats"
                  className="mr-2 h-6 w-6"
                />
                <span>Google Chats</span>
              </div>
              <Badge
                variant="default"
                className="mr-2.5 bg-[#5271ff] text-white"
              >
                Coming Soon
              </Badge>
            </div>
          </AccordionTrigger>
        </AccordionItem>

        <AccordionItem
          value="email"
          className="rounded-lg border border-gray-200 bg-gray-50"
        >
          <AccordionTrigger className="px-4 py-2 hover:no-underline">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                <img src={GMAIL} alt="Email" className="mr-2 h-6 w-6" />
                <span>Email</span>
              </div>
              <Badge
                variant="default"
                className="mr-2.5 bg-[#5271ff] text-white"
              >
                Coming Soon
              </Badge>
            </div>
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
