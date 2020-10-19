import { MobileProps } from './types';
import { logo as defaultLogo } from '../resources/images';

/**
 * Handles props that require default value
 */
export const formatProps = (props:MobileProps) => {
  const {
    logo = {
    },
  } = props;
  const {
    src = defaultLogo,
    alt = 'logo',
  } = logo;

  return {
    ...props,
    logo: {
      src,
      alt,
    },
  };
};
