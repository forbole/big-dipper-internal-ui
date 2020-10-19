import React from 'react';
import classnames from 'classnames';
import {
  Nav,
  Hamburger,
  NavOpen,
} from './components';
import { MobileProps } from './types';
import { useMobileHook } from './hooks';
import { useGetStyles } from './styles';
import { formatProps } from './utils';

const MobileNav = (props: MobileProps) => {
  const hookData = useMobileHook();
  const formattedProps = formatProps(props);
  const { classes } = useGetStyles();

  return (
    <div className={classnames(classes.root, 'big-dipper', 'mobile-nav-container')}>
      <Hamburger {...hookData} />
      <NavOpen {...hookData} />
      <Nav {...formattedProps} />
    </div>
  );
};

export default MobileNav;
