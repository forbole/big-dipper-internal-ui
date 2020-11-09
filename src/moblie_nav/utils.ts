import { useTheme } from '@material-ui/core/styles';
import { MobileProps } from './types';
import {
  logo as defaultLogo, logoWhite,
} from '../resources/images';

/**
 * Handles props that require default value
 */
export const formatProps = (props:MobileProps): any => {
  const theme = useTheme();
  const {
    logo,
    searchBar,
    announcement = '',
    network,
    menu,
    hamburgerIcon,
    className,
  } = props;
  const logoFormat = {
    src: logo?.src ?? theme?.palette?.type === 'light' ? defaultLogo : logoWhite,
    alt: logo?.alt ?? 'logo',
    onClick: logo?.onClick,
  };
  return {
    ...props,
    network,
    logo: logoFormat,
    searchBar,
    announcement,
    menu,
    hamburgerIcon,
    className,
  };
};
