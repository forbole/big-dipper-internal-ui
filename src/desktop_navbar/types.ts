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

export type language = {
  selected: singleLanguage;
  languages: singleLanguage[];
  onClick: ({ key, value }:singleLanguage) => void;
}

export type TopBarProps = {
  language: language;
}

export interface DesktopNavProps {
  sideBar: DesktopSideBarProps;
  topBar: TopBarProps;
}
