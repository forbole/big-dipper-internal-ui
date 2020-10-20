import {
  MobileProps, MobileHookProps,
} from '../../types';

export interface NavProps extends MobileProps, MobileHookProps {
  logo: {
    src: string;
    alt: string;
  }
}
