import { ReactElement } from 'react';

type Donate = {
  text?: string;
  url?: string;
  title?: string;
}

type BigDipperLogo = {
  src?: string;
  alt?: string;
}

export interface FooterProps {
  /**
   * Breakpoint between mobile and desktop component
   */
  breakpoint?: number | string;
  bigDipperLogo: BigDipperLogo,
  blockExplorerText: string;
  copyrightText: string;
  donate?: Donate;
  linkComponents?: ReactElement[];
  linkDecorator?: ReactElement | string;
  socialMediaComponents?: ReactElement[];
  storeBadgesComponents?: ReactElement[];
}
