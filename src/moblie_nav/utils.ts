import { MobileProps } from './types';
import { logo as defaultLogo } from '../resources/images';

/**
 * Handles props that require default value
 */
export const formatProps = (props:MobileProps): any => {
  const {
    logo = {
      src: defaultLogo,
      alt: 'logo',
    },
    searchBar,
    announcement = '',
    network,
    menu,
    hamburgerIcon,
  } = props;

  return {
    ...props,
    network,
    logo,
    searchBar,
    announcement,
    menu,
    hamburgerIcon,
  };
};
