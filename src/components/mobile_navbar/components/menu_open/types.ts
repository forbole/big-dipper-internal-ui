import {
  MobileProps, menu,
} from '../../types';

export interface NavOpenProps extends MobileProps {
  menu: menu;
}

export interface NavOpenHookProps {
  toggleDrawer: () => void;
  drawerOpen: boolean;
}
