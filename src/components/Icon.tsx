import { icons } from 'lucide-react';

const Icon = ({ name, className, ...props }: any) => {
  const LucideIcon = icons[name];

  return <LucideIcon className={className} {...props} />;
};

export default Icon;
