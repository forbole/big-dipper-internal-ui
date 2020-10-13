import { ReactElement } from 'react';

export interface FooterProps {
  BDLogoSrc?: string;
  /**
   * Alt defaults to `big dipper logo`
   */
  BDLogoAlt?: string;
  /**
   * Breakpoint between mobile and desktop component
   */
  breakpoint?: number | string;
  blockExplorerText: string;
  copyrightText: string;
  donateText: string;
  linkComponents: ReactElement[];
  linkDecorator?: ReactElement | string;
}
