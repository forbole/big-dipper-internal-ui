import React, {
  useEffect, useState, useRef,
} from 'react';

export const useMobileHook = () => {
  const [isOpen, setOpen] = useState(false);
  const [isNetworkOpen, setNetworkOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleIsOpen = () => {
    if ((isOpen && isNetworkOpen) || (isOpen && isNavOpen)) {
      if (isNetworkOpen) {
        setNetworkOpen(false);
      }
      if (isNavOpen) {
        setNavOpen(false);
      }
      setOpen(false);
    } else {
      // if initial state is closed then we open navbar
      setNavOpen(true);
      setOpen(true);
    }
  };

  const openNetwork = () => {
    // make sure everything else is closed first
    if (isNavOpen) {
      setNavOpen(false);
    }
    setNetworkOpen(true);
    setOpen(true);
  };

  return {
    isOpen,
    toggleIsOpen,
    isNetworkOpen,
    isNavOpen,
    openNetwork,
  };
};
