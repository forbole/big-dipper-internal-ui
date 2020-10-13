import React from 'react';
import { Link } from '@material-ui/core';
import { FooterProps } from '../../src/footer/types';

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
};
