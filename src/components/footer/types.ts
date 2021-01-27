import { ReactElement } from 'react';

type Donate = {
  text: string;
}

type DonateLink = Donate & {
  url: string;
  onClick?: () => void;
}

type DonateAction = Donate & {
  url?: string;
  onClick: () => void;
}

type DonateProps = DonateLink | DonateAction;

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
  donate?: DonateProps;
  links?: Links;
  socialMediaComponents?: ReactElement[];
  className?: string;
}
