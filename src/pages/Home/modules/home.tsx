import { useCallback, useMemo, useState } from 'react';

import { SubSectionHeading } from '@/components/custom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

import {
  APIs,
  BashShell,
  Channels,
  Docker,
  Server,
} from '../components/Options';
import Guide from '../components/Options/Guide';
import Sidebar from '../components/Sidebar';
import SlackPreview from '../components/SlackPreview';
import { Option } from '../features/homeType';

export default function Home() {
  const [bashScript, setBashScript] = useState(``);
  const [selectedOption, setSelectedOption] = useState<Option>('guide');
  const [showPreview, setShowPreview] = useState(false);

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case 'channels':
        return <Channels />;
      case 'api':
        return <APIs />;
      case 'docker':
        return <Docker />;
      case 'server':
        return <Server />;
      case 'guide':
        return <Guide />;
      default:
        return <Channels />;
    }
  };

  // Memoize the BashShell component
  const memoizedBashShell = useMemo(() => <BashShell />, []);

  return (
    <div className="flex h-screen flex-col bg-gray-100 text-gray-800">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          selectedOption={selectedOption}
          onOptionSelect={setSelectedOption}
        />

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <Card className="h-full w-full">
            <CardContent className="h-full p-4 sm:p-6">
              <div className="flex h-full flex-col lg:flex-row lg:space-x-6">
                {/* Selected component section */}
                <div className="mb-4 h-1/2 overflow-auto lg:mb-0 lg:h-full lg:w-1/2">
                  {renderSelectedComponent()}
                </div>

                {/* Bash Script or Preview section */}
                <div className="flex h-1/2 flex-col lg:h-full lg:w-1/2">
                  <div className="mb-4 flex items-center justify-between">
                    <SubSectionHeading
                      heading={'Bash Script 🫣'}
                      subHeading={
                        'Generated script based on your configurations'
                      }
                    />
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">
                        Script/Preview
                      </span>
                      <Switch
                        checked={showPreview}
                        onCheckedChange={setShowPreview}
                      />
                    </div>
                  </div>
                  <div className="flex-1 overflow-auto">
                    {showPreview ? <SlackPreview /> : memoizedBashShell}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
