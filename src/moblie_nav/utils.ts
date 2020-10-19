import { MobileProps } from './types';
import { logo } from '../resources/images';

/**
 * Handles props that require default value
 */
export const formatProps = (props:MobileProps) => {
  const { logoSrc = logo } = props;

  return {
    logoSrc,
    ...props,
  };
};
