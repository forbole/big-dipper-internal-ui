type logo = {
  src?: string;
  alt?: string;
}
// wingman
// i could be wrong
export type searchBarCallback = (value:string | number) => void;
export interface MobileProps {
  logo?: logo;
  searchBar?: boolean;
  announcement?: boolean;
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
