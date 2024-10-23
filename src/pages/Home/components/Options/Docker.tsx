import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Trash2 } from 'lucide-react';

import { SubSectionHeading } from '@/components/custom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { AppDispatch, RootState } from '@/store';

import {
  addDockerContainer,
  removeDockerContainer,
  setSelectAllContainers,
} from '../../features/homeSlice';

interface DockerContainer {
  id: string;
  name: string;
}

export default function Docker() {
  const dispatch = useDispatch<AppDispatch>();
  const { toast } = useToast();
  const containers = useSelector(
    (state: RootState) => state.home.dockerContainers
  );
  const selectAll = useSelector(
    (state: RootState) => state.home.selectAllContainers
  );

  const [showAddForm, setShowAddForm] = useState(false);
  const [newContainer, setNewContainer] = useState<string>('');

  const handleAddContainer = () => {
    if (newContainer.trim()) {
      dispatch(
        addDockerContainer({
          id: Date.now().toString(),
          name: newContainer.trim(),
        })
      );
      setNewContainer('');
      setShowAddForm(false);
      toast({
        title: 'Container Added',
        description: 'Your Docker container has been successfully added.',
        variant: 'success',
      });
    }
  };

  const handleSelectAll = (checked: boolean) => {
    dispatch(setSelectAllContainers(checked));
  };

  const handleDeleteContainer = (id: string) => {
    dispatch(removeDockerContainer(id));
  };

  return (
    <div className="w-full max-w-full overflow-hidden text-gray-800">
      <SubSectionHeading
        heading="Docker Containers"
        subHeading="Select all containers or specify names to monitor"
      />

      <div className="mt-4">
        <div className="mb-4 flex items-center space-x-2">
          <Checkbox
            id="selectAll"
            checked={selectAll}
            onCheckedChange={handleSelectAll}
          />
          <label htmlFor="selectAll" className="text-sm font-medium">
            Select All Containers (Auto-detect)
          </label>
        </div>

        {containers.length === 0 && !selectAll && !showAddForm && (
          <div className="mt-4 flex flex-col items-center py-4 text-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mb-2 h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <p className="text-lg font-semibold">No containers specified</p>
            <p className="text-sm">
              Select all or add container names to monitor
            </p>
          </div>
        )}

        {containers.length > 0 && (
          <ul className="space-y-2">
            {containers.map((container) => (
              <li
                key={container.id}
                className="flex items-center justify-between rounded bg-gray-100 p-2 capitalize"
              >
                <span>{container.name}</span>
                {!selectAll && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteContainer(container.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {!selectAll &&
        (showAddForm ? (
          <div className="mt-4 space-y-4">
            <Separator className="mb-2 text-gray-400" />
            <label className="text-sm font-medium">New Container:</label>
            <Input
              placeholder="Container Name"
              value={newContainer}
              onChange={(e) => setNewContainer(e.target.value)}
            />
            <div className="flex space-x-2">
              <Button onClick={handleAddContainer} className="w-full">
                Add Container
              </Button>
              <Button
                onClick={() => setShowAddForm(false)}
                variant="outline"
                className="w-full"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <Button onClick={() => setShowAddForm(true)} className="mt-4 w-full">
            Add Container Name
          </Button>
        ))}
    </div>
  );
}
