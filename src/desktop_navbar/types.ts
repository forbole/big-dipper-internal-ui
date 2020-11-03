import { ReactElement } from 'react';

export type DesktopSideBarProps = {
  open: boolean;
  onClick: () => void;
  items: ReactElement[];
  logoSrc?: string;
}

export interface DesktopNavProps {
  sideBar: DesktopSideBarProps;
}
