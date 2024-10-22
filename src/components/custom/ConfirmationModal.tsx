import React from 'react';
import { Outlet } from 'react-router-dom';

import { Circle } from 'lucide-react';

import { DustbinIcon, GreenStar } from '@/assets/svg';

import { Button } from '../ui/button';

interface ConfirmationModalProps {
  type: 'success' | 'error' | any;
  title: string;
  subtitle: string;
  onCancel: () => void;
  onSubmit: () => void;
  isLoading: boolean;
  confirmationButtonName?: string;
}

function ConfirmationModal({
  type,
  title,
  subtitle,
  onCancel,
  onSubmit,
  isLoading,
  confirmationButtonName = 'Confirm',
}: ConfirmationModalProps) {
  return (
    <React.Fragment>
      <div className="px-3 text-center">
        <ConfirmationIcon type={type} />
        <p className="font-Inter text-md mt-4  font-semibold text-[#101828]">
          {title}
        </p>
        <p className="font-Inter mt-2 text-sm text-[#475467]">{subtitle}</p>
        <div className="mt-8 px-3">
          <Outlet />
        </div>

        <div className="mt-4 flex items-center justify-center gap-x-4">
          <Button
            onClick={() => onCancel()}
            variant={'outline'}
            className={`mt-6 w-1/2`}
          >
            {/* <Icon icon="Close" className="h-4 w-4" /> */}
            <span className="text-sm font-semibold">Cancel</span>
          </Button>
          {isLoading ? (
            <Button
              className={`mt-6 w-1/2 ${type !== 'success' && 'bg-red-500'}`}
            >
              <Circle
                size={20}
                className="mr-3 inline h-4 w-4 animate-spin text-white"
              />
              Loading...
            </Button>
          ) : (
            <Button
              onClick={() => onSubmit()}
              className={`mt-6 w-1/2 ${type !== 'success' && 'bg-red-500'}`}
            >
              {confirmationButtonName}
            </Button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

function ConfirmationIcon({ type }: any) {
  return (
    <React.Fragment>
      {type === 'success' ? <GreenStar /> : <DustbinIcon />}
    </React.Fragment>
  );
}

export default ConfirmationModal;
