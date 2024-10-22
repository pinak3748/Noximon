import { CSSProperties, useEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import { API, CHANNELS, DOCKER, LOGO, PREVIEW, SERVER } from '@/assets';
import { Button } from '@/components/ui/button';

import { Option } from '../features/homeType';

const sidebarOptions = [
  {
    label: 'Channels',
    icon: CHANNELS,
    value: 'channels' as Option,
  },
  {
    label: 'API',
    icon: API,
    value: 'api' as Option,
  },
  {
    label: 'Docker',
    icon: DOCKER,
    value: 'docker' as Option,
  },
  {
    label: 'Server',
    icon: SERVER,
    value: 'server' as Option,
  },
];

interface SidebarProps {
  selectedOption: Option;
  onOptionSelect: (option: Option) => void;
}

export default function Sidebar({
  selectedOption,
  onOptionSelect,
}: SidebarProps) {
  const [buttonRefs, setButtonRefs] = useState<Array<HTMLButtonElement | null>>(
    []
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const isInitialRender = useRef(true);

  useEffect(() => {
    setButtonRefs(new Array(sidebarOptions.length).fill(null));
  }, []);

  const selectedIndex = sidebarOptions.findIndex(
    (opt) => opt.value === selectedOption
  );

  const onLeaveNav = () => {
    setHoveredIndex(null);
    setHoveredRect(null);
  };

  const onEnterButton = (
    e: React.PointerEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (!e.currentTarget) return;
    setHoveredIndex(index);
    setHoveredRect(e.currentTarget.getBoundingClientRect());
  };

  // Get the current nav rectangle measurements
  const getNavRect = () => navRef.current?.getBoundingClientRect();
  const getSelectedRect = () =>
    buttonRefs[selectedIndex]?.getBoundingClientRect();

  // Update hover indicator styles
  const getHoverStyles = (): CSSProperties => {
    const navRect = getNavRect();
    if (!navRect || !hoveredRect)
      return { opacity: 0, transform: 'translateY(-20px)' };

    return {
      transform: `translateY(${hoveredRect.top - navRect.top}px)`,
      height: hoveredRect.height,
      opacity: hoveredIndex !== null ? 1 : 0,
      transition: 'all 200ms ease-out',
      width: '100%',
      backgroundColor: '#dbe2ff', // Light shade of primary color
      borderRadius: '0.375rem', // rounded-md
    };
  };

  // Update selection indicator styles
  const getSelectStyles = (): CSSProperties => {
    const navRect = getNavRect();
    const selectedRect = getSelectedRect();

    if (!navRect || !selectedRect) return { opacity: 0 };

    return {
      transform: `translateY(${selectedRect.top - navRect.top}px)`,
      height: selectedRect.height,
      opacity: 1,
      transition: isInitialRender.current
        ? 'opacity 150ms ease-out'
        : 'all 200ms ease-out',
      width: '100%',
      backgroundColor: '#eef1ff',
      borderRadius: '0.375rem',
    };
  };

  useEffect(() => {
    isInitialRender.current = true;
  }, []);

  return (
    <aside className="relative w-24 bg-white shadow-md">
      <div className="flex h-full flex-col items-center">
        <img src={LOGO} alt="Noximon" className="" />

        <div
          className="relative mt-6 flex flex-1 flex-col"
          ref={navRef}
          onPointerLeave={onLeaveNav}
        >
          <div className="space-y-4">
            {sidebarOptions.map((option, index) => (
              <Button
                key={option.value}
                variant="ghost"
                size="icon"
                className={clsx(
                  'relative z-10 flex h-fit w-full flex-col gap-1 p-1.5 transition-colors duration-200',
                  hoveredIndex === index || option.value === selectedOption
                    ? 'text-[#2e2e2e]'
                    : 'text-gray-500'
                )}
                onClick={() => onOptionSelect(option.value)}
                onPointerEnter={(e) => onEnterButton(e, index)}
                ref={(el) => (buttonRefs[index] = el)}
              >
                <img
                  src={option.icon}
                  alt={option.label}
                  className="h-8 w-8 transition-opacity duration-200"
                />
                <span className="text-xs">{option.label}</span>
              </Button>
            ))}
          </div>

          <div
            className="pointer-events-none absolute left-0 top-0 rounded-md"
            style={getHoverStyles()}
            aria-hidden
          />

          <div
            className="pointer-events-none absolute left-0 top-0 rounded-md"
            style={getSelectStyles()}
            aria-hidden
          />
        </div>
      </div>
    </aside>
  );
}
