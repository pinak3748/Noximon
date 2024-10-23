import React from 'react';
import { useSelector } from 'react-redux';

import { LOGO } from '@/assets';
import { RootState } from '@/store';

export default function SlackPreview() {
  const apiRequests = useSelector((state: RootState) => state.home.apiRequests);
  const dockerContainers = useSelector(
    (state: RootState) => state.home.dockerContainers
  );

  // Simulate some failed containers and APIs for the preview
  let failedContainers = dockerContainers.slice(
    0,
    Math.min(3, dockerContainers.length)
  );
  let failedApis = apiRequests.slice(0, Math.min(2, apiRequests.length));

  // Add dummy data if there are no failed containers or APIs
  if (failedContainers.length === 0) {
    failedContainers = [
      { id: 'dummy1', name: 'noximon-proxy-prod' },
      { id: 'dummy2', name: 'noximon-redis-prod' },
      { id: 'dummy3', name: 'noximon-api-prod' },
      { id: 'dummy4', name: 'noximon-client-prod' },
      { id: 'dummy5', name: 'noximon-worker-prod' },
    ];
  }

  if (failedApis.length === 0) {
    failedApis = [
      {
        id: 'dummyApi1',
        name: 'API 1',
        endpoint: 'http://localhost:8000/health',
        expectedStatus: '200',
        type: '',
      },
      {
        id: 'dummyApi2',
        name: 'API 2',
        endpoint: 'http://localhost:8000/health_v2',
        expectedStatus: '200',
        type: '',
      },
    ];
  }

  return (
    <div className="w-full max-w-[400px]">
      <div className="rounded-md bg-[#282c34] p-4 px-6 font-sans text-white">
        <div className="mb-2 flex items-center">
          <img src={LOGO} alt="IONIO APP" className="mr-2 h-8 w-8 rounded" />
          <span className="text-md font-bold">Noximon Bot</span>
          <span className="ml-2 text-xs text-gray-400">11:45 AM</span>
        </div>
        <div className="mb-2">
          <span className="mr-1 text-yellow-500">⚠️</span>
          <span className="font-semibold text-gray-100">
            ALERT: The following issues were detected:
          </span>
        </div>
        <div className="mb-2">
          <p className="text-gray-100">Below containers are down:</p>
          <ul className="list-inside list-disc pl-4">
            {failedContainers.map((container, index) => (
              <li key={index} className="text-gray-100">
                {container.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-2">
          <p className="text-gray-100">
            APIs not responding with there excepted status code:
          </p>
          <ul className="list-inside list-disc pl-4">
            {failedApis.map((api, index) => (
              <li key={index} className="text-gray-400">
                <a
                  href={api.endpoint}
                  className="text-blue-400 no-underline hover:underline"
                >
                  {api.endpoint}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-gray-100">
          Please investigate immediately!{' '}
          <span role="img" aria-label="rotating light">
            🚨
          </span>
        </p>

        {/* Reactions */}
        <div className="mt-3 flex space-x-2">
          <div
            className={`flex items-center space-x-1 rounded-full bg-[#5271ff]/80 px-2.5 py-1 text-sm`}
          >
            <span>🚀</span>
            <span className="text-gray-100">20</span>
          </div>
          <div
            className={`flex items-center space-x-1 rounded-full bg-[#5271ff]/80 px-2.5 py-1 text-sm`}
          >
            <span>🎯</span>
            <span className="text-gray-100">21</span>
          </div>
          <div
            className={`flex items-center space-x-1 rounded-full bg-[#5271ff]/80 px-2.5 py-1 text-sm`}
          >
            <span>🔥</span>
            <span className="text-gray-100">15</span>
          </div>
        </div>
      </div>
    </div>
  );
}
