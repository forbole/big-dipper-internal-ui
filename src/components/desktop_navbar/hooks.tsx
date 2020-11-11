import { UseDesktopNavbarHookProps } from './types';

export const useDesktopNavbarHook = ({ sideBar, network }: UseDesktopNavbarHookProps) => {
  const handleClickAway = () => {
    if (sideBar.open) {
      sideBar.onClick();
    }
    if (network.isNetworkOpen) {
      network.toggleNetwork();
    }
  };
  return {
    handleClickAway,
  };
};
