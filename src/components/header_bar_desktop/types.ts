import React from 'react';

export type Data = {
  key: string;
  value: string;
}

export interface DesktopHeaderBarProps {
  announcement?: string;
  title: string | React.ReactNode;
  market: Data[];
}
