export type logo = {
  src: string;
  alt: string;
}

export type network = {
  network: string;
  online: boolean;
  // wingman
  isNetworkOpen: boolean;
  openNetwork: () => void;
}

type searchBar = {
  searchBarPlaceholder?: string;
  searchBarCallback: (value:string | number) => void;
}

type menu = {
  isMenuOpen: boolean;
}

type hamburgerIcon = {
  isOpen: boolean;
  onClick: () => void,
}

export interface MobileProps {
  logo?: logo;
  searchBar?: searchBar;
  announcement?: string;
  network?: network;
  menu: menu;
  hamburgerIcon: hamburgerIcon;
}

// type toggleIsOpen = () => void;
// type openNetwork = () => void;
// export interface MobileHookProps {
//   isOpen: boolean;
//   toggleIsOpen: toggleIsOpen;
//   isNetworkOpen: boolean;
//   isNavOpen: boolean;
//   openNetwork: openNetwork;
// }
