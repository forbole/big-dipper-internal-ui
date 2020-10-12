import { FooterProps } from '../../src/footer/types';
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
};
