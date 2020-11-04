import { ReactElement } from 'react';

export type logo = {
  src?: string;
  alt?: string;
}

export type network = {
  selectedNetwork: {
    value: string;
    online?: boolean;
    iconSrc?: string;
  }
  items: ReactElement[];
  isNetworkOpen?: boolean;
  openNetwork?: () => void;
}

export type searchBar = {
  searchBarPlaceholder?: string;
  searchBarCallback: (value:string | number) => void;
}

export type singleLanguage = {
  key: string;
  value: string;
}

export type language = {
  selected: singleLanguage;
  languages: singleLanguage[];
  onClick: ({ key, value }:singleLanguage) => void;
}

export type themeMode = {
  mode: {
    value: string;
    key: string;
  };
  onClick: () => void;
}

export type menu = {
  isMenuOpen: boolean;
  items: ReactElement[];
  language?: language;
  themeMode?: themeMode;
}

export type hamburgerIcon = {
  isOpen: boolean;
  onClick: () => void,
}

export interface MobileProps {
  logo?: logo;
  searchBar?: searchBar;
  announcement?: string;
  network?: network;
  menu?: menu;
  hamburgerIcon?: hamburgerIcon;
}
