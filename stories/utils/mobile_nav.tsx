import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

export const useMobileHook = () => {
  const [isOpen, setOpen] = useState(false);
  const [isNetworkOpen, setNetworkOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [mode, setMode] = useState({
    value: 'light mode',
    key: 'light',
  });

  const toggleMode = () => {
    const value = mode?.key === 'light' ? 'dark' : 'light';
    setMode({
      value: `${value} mode`,
      key: value,
    });
  };

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
    toggleMode,
    mode,
  };
};

export const MenuItem = (props:any) => {
  const { value } = props;
  const useStyles = makeStyles({
    root: {
      fontSize: '1rem',
      margin: '1rem 0',
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {value}
    </div>
  );
};
