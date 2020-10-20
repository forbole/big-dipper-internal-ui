import { MobileProps } from './types';
import { logo as defaultLogo } from '../resources/images';

/**
 * Handles props that require default value
 */
export const formatProps = (props:MobileProps): any => {
  const {
    logo = {
    },
    searchBar = true,
    announcement = '',
    network = {
    },
  } = props;
  const {
    src = defaultLogo,
    alt = 'logo',
  } = logo;

  return {
    ...props,
    network,
    logo: {
      src,
      alt,
    },
    searchBar,
    announcement,
  };
};
