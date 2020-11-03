import { ReactElement } from 'react';

export type DesktopSideBarProps = {
  open: boolean;
  onClick: () => void;
  items: ReactElement[];
  logoSrc?: string;
}

export type TopBarProps = {
}

export interface DesktopNavProps {
  sideBar: DesktopSideBarProps;
  // topBar: TopBarProps;
}
