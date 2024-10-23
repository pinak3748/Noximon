import { Pickaxe } from 'lucide-react';
import React from 'react';

export default function Server() {
  return (
    <div className="bg-white flex flex-col items-center justify-center h-full rounded-lg shadow-sm p-6 text-center">
      <div className="space-y-4">
        <div className="flex items-center justify-center">
          <Pickaxe className="w-12 h-12 text-[#5271ff] animate-bounce" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800">Server Settings</h3>
        
        <div className="space-y-2">
          <p className="text-gray-600">
            🚧 Our developers are mining this feature! 🚧
          </p>
          <p className="text-sm text-gray-500">
            They're digging deep into the code caves, fighting off bugs, 
            and trying not to wake up the sleeping servers.
          </p>
          <p className="text-xs text-gray-400 italic mt-2">
            Estimated time of arrival: Soon™ 
            (that's developer speak for "we're working on it, we promise!")
          </p>
        </div>

        <div className="pt-4">
          <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            🏗️ Currently under construction
          </span>
        </div>
      </div>
    </div>
  );
}
