import { ReactElement } from 'react';

export type DesktopSideBarProps = {
  open: boolean;
  onClick: () => void;
  items: ReactElement[];
  logoSrc?: string;
}

export type singleLanguage = {
  key: string;
  value: string;
}

export type searchBar = {
  searchBarPlaceholder?: string;
  searchBarCallback: (value:string | number) => void;
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

export type network = {
  selectedNetwork: {
    value: string;
    online?: boolean;
    iconSrc: string;
  }
  items: ReactElement[];
  isNetworkOpen?: boolean;
  openNetwork?: () => void;
}

export type TopBarProps = {
  language: language;
  themeMode: themeMode;
  searchBar: searchBar;
  network: network;
}

export interface DesktopNavProps {
  sideBar: DesktopSideBarProps;
  topBar: TopBarProps;
}
