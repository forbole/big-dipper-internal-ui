type logo = {
  src?: string;
  alt?: string;
}
export interface MobileProps {
  logo: logo;
}

type toggleIsOpen = () => void;
type openNetwork = () => void;
type openTest = () => void;
export interface MobileHookProps {
  isOpen: boolean;
  toggleIsOpen: toggleIsOpen;
  isNetworkOpen: boolean;
  isNavOpen: boolean;
  openNetwork: openNetwork;
}
