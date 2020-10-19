import { useState } from 'react';
import { MobileHookProps } from './types';

export const useMobileHook = (): MobileHookProps => {
  const [isOpen, setOpen] = useState(false);

  const toggleIsOpen = () => {
    setOpen(!isOpen);
  };

  return {
    isOpen,
    toggleIsOpen,
  };
};
