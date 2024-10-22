import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import Icon from '../Icon';

interface AnalyticsCardProps {
  title: string;
  icon: string;
  value: string;
  subValue: string;
}

function AnalyticsCard({
  title,
  icon,
  value,
  subValue,
  ...props
}: AnalyticsCardProps) {
  return (
    <React.Fragment>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Icon name={icon} className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{value}</div>
          <p className="text-xs text-muted-foreground">{subValue}</p>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default AnalyticsCard;
