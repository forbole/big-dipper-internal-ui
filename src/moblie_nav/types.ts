type logo = {
  src?: string;
  alt?: string;
}
export interface MobileProps {
  logo: logo;
  searchBar?: boolean;
  announcement?: boolean;
}

type toggleIsOpen = () => void;
type openNetwork = () => void;
export interface MobileHookProps {
  isOpen: boolean;
  toggleIsOpen: toggleIsOpen;
  isNetworkOpen: boolean;
  isNavOpen: boolean;
  openNetwork: openNetwork;
}
