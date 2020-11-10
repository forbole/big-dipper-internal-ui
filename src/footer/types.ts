import { ReactElement } from 'react';

type Donate = {
  text?: string;
  url?: string;
}

type BigDipperLogo = {
  src?: string;
  alt?: string;
  onClick?: () => void;
}

type Links = {
  components?: ReactElement[];
  decorator?: ReactElement | string;
}

export interface FooterProps {
  /**
   * Breakpoint between mobile and desktop component
   */
  breakpoint?: number | string;
  bigDipperLogo?: BigDipperLogo,
  blockExplorerText: string;
  copyrightText: string;
  donate?: Donate;
  links?: Links;
  socialMediaComponents?: ReactElement[];
  storeBadgesComponents?: ReactElement[];
  className?: string;
}
