import { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

import {
  APIs,
  BashShell,
  Channels,
  Docker,
  Server,
} from '../components/Options';
import Sidebar from '../components/Sidebar';
import { Option } from '../features/homeType';

export default function Home() {
  const [bashScript, setBashScript] = useState(``);
  const [selectedOption, setSelectedOption] = useState<Option>('channels');

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
      default:
        return <Channels />;
    }
  };

  return (
    <div className="flex h-screen flex-col bg-gray-100 text-gray-800">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          selectedOption={selectedOption}
          onOptionSelect={setSelectedOption}
        />

        {/* Main content */}
        <main className="flex-1 overflow-auto p-6">
          <Card className="h-full w-full">
            <CardContent className="h-full p-6">
              <div className="flex h-full space-x-6">
                {/* Selected component section */}
                <div className="w-1/2">{renderSelectedComponent()}</div>

                {/* Bash Script section */}
                <div className="flex h-full w-1/2 flex-col">
                  <h2 className="mb-4 text-xl font-semibold">Preview 🫣</h2>
                  <div className="h-full flex-1 overflow-auto">
                    <BashShell />
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
