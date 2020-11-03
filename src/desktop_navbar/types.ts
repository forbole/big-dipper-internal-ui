import { ReactElement } from 'react';

export type DesktopSideBarProps = {
  open: boolean;
  onClick: () => void;
  items: ReactElement[];
}

export interface DesktopNavProps {
  sideBar: DesktopSideBarProps;
}
