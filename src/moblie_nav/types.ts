import { ReactElement } from 'react';

export type logo = {
  src?: string;
  alt?: string;
}

export type network = {
  network?: string;
  online?: boolean;
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

export type menu = {
  isMenuOpen: boolean;
  items: ReactElement[];
  language: language;
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
