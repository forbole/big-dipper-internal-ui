import { useState } from 'react';
import { NavOpenHookProps } from './types';

export const useMenuOpenHook = ():NavOpenHookProps => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return {
    toggleDrawer,
    drawerOpen,
  };
};
