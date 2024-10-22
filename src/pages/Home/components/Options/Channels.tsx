import { useState } from 'react';

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

export default function Channels() {
  const [slackToken, setSlackToken] = useState('');
  const [slackStatus, setSlackStatus] = useState<
    'idle' | 'testing' | 'success'
  >('idle');
  const { toast } = useToast();

  const testSlackNotification = async () => {
    setSlackStatus('testing');
    // Implement the actual API call to test Slack notification here
    // For now, we'll simulate a successful test after a short delay
    setTimeout(() => {
      setSlackStatus('success');
      toast({
        title: 'Slack Connected',
        description:
          'Your Slack notification channel has been successfully connected.',
        variant: 'success',
      });
    }, 1500);
  };

  return (
    <div className="text-gray-800">
      <SubSectionHeading
        heading="Notification Channels"
        subHeading="Connect and manage your preferred notification channels"
      />

      <Accordion type="single" collapsible className="mt-4 w-full space-y-4">
        <AccordionItem
          value="slack"
          className="rounded-lg border border-gray-200 bg-gray-50 p-1.5"
        >
          <AccordionTrigger className="px-4 py-2 hover:no-underline">
            <div className="flex w-full items-center">
              <img src={SLACK} alt="Slack" className="mr-2 h-6 w-6" />
              <span className="text-left">Slack</span>
              {slackStatus === 'success' && (
                <Badge
                  variant="secondary"
                  className="ml-2 bg-green-100 text-green-800"
                >
                  Connected
                </Badge>
              )}
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-3 px-4 pb-4">
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-medium">Access Token</label>
                <Input
                  placeholder="Enter Slack Access Token"
                  value={slackToken}
                  onChange={(e) => setSlackToken(e.target.value)}
                  className="w-full border-gray-300 focus:border-[#5271ff] focus:ring-[#5271ff]"
                />
              </div>
              <a
                href="https://api.slack.com/authentication/basics"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#5271ff] hover:underline"
              >
                Where to get Slack Access Token?
              </a>
              <div className="flex space-x-2">
                <Button
                  onClick={testSlackNotification}
                  disabled={!slackToken || slackStatus === 'testing'}
                  className={cn(
                    'w-full bg-[#5271ff] text-white hover:bg-[#3e5bff]',
                    (!slackToken || slackStatus === 'testing') &&
                      'cursor-not-allowed opacity-50'
                  )}
                >
                  {slackStatus === 'testing' ? 'Testing...' : 'Test Connection'}
                </Button>
                <Button
                  variant="outline"
                  disabled={slackStatus !== 'success'}
                  className={cn(
                    'w-full border-[#5271ff] text-[#5271ff] hover:bg-[#5271ff] hover:text-white',
                    slackStatus !== 'success' && 'cursor-not-allowed opacity-50'
                  )}
                >
                  Save
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="google-chats"
          className="rounded-lg border border-gray-200 bg-gray-50 px-4"
        >
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center">
              <img
                src={GOOGLECHAT}
                alt="Google Chats"
                className="mr-2 h-6 w-6"
              />
              Google Chats
              <Badge
                variant="default"
                className="ml-2.5 bg-[#5271ff] text-white"
              >
                Coming Soon
              </Badge>
            </div>
          </AccordionTrigger>
        </AccordionItem>

        <AccordionItem
          value="email"
          className="cursor-default rounded-lg border border-gray-200 bg-gray-50 px-4"
        >
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center">
              <img src={GMAIL} alt="Email" className="mr-2 h-6 w-6" />
              Email
              <Badge
                variant="default"
                className="ml-2.5 bg-[#5271ff] text-white"
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
