type logo = {
  src?: string;
  alt?: string;
}

export type searchBarCallback = (value:string | number) => void;
export interface MobileProps {
  logo?: logo;
  searchBar?: boolean;
  announcement?: string;
  searchBarPlaceholder?: string;
  searchBarCallback?: searchBarCallback;
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
