import React from 'react';
import {
  Nav, Hamburger,
} from './components';
import { MobileProps } from './types';
import { useMobileHook } from './hooks';
import { formatProps } from './utils';

const MobileNav = (props: MobileProps) => {
  const hookData = useMobileHook();
  const formattedProps = formatProps(props);
  return (
    <div>
      <Hamburger {...hookData} />
      <Nav {...formattedProps} />
    </div>
  );
};

export default MobileNav;
