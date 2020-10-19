import React from 'react';
import classnames from 'classnames';
import {
  Nav,
  Hamburger,
  NavOpen,
  NetworksOpen,
} from './components';
import { MobileProps } from './types';
import { useMobileHook } from './hooks';
import { useGetStyles } from './styles';
import { formatProps } from './utils';

const MobileNav = (props: MobileProps) => {
  const hookData = useMobileHook();
  const formattedProps = formatProps(props);
  const { classes } = useGetStyles();
  const {
    isNetworkOpen,
    isNavOpen,
    isOpen,
  } = hookData;
  // console.log('network ->', isNetworkOpen);
  // console.log('nav ->', isNavOpen);
  // console.log('open ->', isOpen);
  return (
    <div className={classnames(classes.root, 'big-dipper', 'mobile-nav-container')}>
      <Hamburger {...hookData} />
      <NavOpen {...hookData} />
      <NetworksOpen {...hookData} />
      <Nav {...formattedProps} {...hookData} />
    </div>
  );
};

export default MobileNav;
