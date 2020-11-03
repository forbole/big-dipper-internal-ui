export type DesktopSideBarProps = {
  open: boolean;
  onClick: () => void;
}

export interface DesktopNavProps {
  sideBar: DesktopSideBarProps;
}
