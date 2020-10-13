import React from 'react';
import { Link } from '@material-ui/core';
import { FooterProps } from '../../src/footer/types';
import {
  TelegramIcon,
  FacebookIcon,
  MediumIcon,
  TwitterIcon,
  GithubIcon,
} from '../../src/icons';

export const LinkComponent = (props:any) => {
  const {
    url,
    title,
  } = props;

  return (
    <Link
      href={url}
      color="inherit"
      underline="none"
    >
      {title}
    </Link>
  );
};

export const SocialMediaComponent = (props:any) => {
  const {
    url,
    component: Component,
    className,
  } = props;

  return (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <Component />
    </a>
  );
};

/**
 * Examples of props needed for `Footer` to work correctly
 */
export const defaultProps:FooterProps = {
  // have a default icon but honestly i hope not
  BDLogoSrc: './src/resources/images/big-dipper-logo.png',
  // default alt is logo
  BDLogoAlt: 'big dipper logo',
  breakpoint: 769,
  blockExplorerText: 'Cosmos Block Explorer',
  copyrightText: 'Copyright © Forbole 2020',
  donateText: 'Donate',
  linkComponents: [
    <LinkComponent url="#" title="About Big Dipper" />,
    <LinkComponent url="#" title="FAQ" />,
    <LinkComponent url="#" title="Terms and Conditions" />,
    <LinkComponent url="#" title="Download Big Dipper Wallet" />,
  ],
  linkDecorator: '|',
  socialMediaComponents: [
    <SocialMediaComponent url="#" component={TelegramIcon} className="telegram" />, <SocialMediaComponent url="#" component={FacebookIcon} className="facebook" />,
    <SocialMediaComponent url="#" component={MediumIcon} className="medium" />,
    <SocialMediaComponent url="#" component={TwitterIcon} className="twitter" />,
    <SocialMediaComponent url="#" component={GithubIcon} className="github" />,
  ],
};

export const socialMediaLinks = [
  {
    component: TelegramIcon,
    url: '#',
  },
  {
    component: FacebookIcon,
    url: '#',
  },
  {
    component: MediumIcon,
    url: '#',
  },
  {
    component: TwitterIcon,
    url: '#',
  },
  {
    component: GithubIcon,
    url: '#',
  },
];
