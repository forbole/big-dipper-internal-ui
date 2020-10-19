import React from 'react';
import {
  Nav, Hamburger,
} from './components';
import { MobileProps } from './types';
import { useMobileHook } from './hooks';

const MobileNav = (props: MobileProps) => {
  const hookData = useMobileHook();
  return (
    <div>
      hello?
      <Hamburger {...hookData} />
      hello.
      <Nav />
    </div>
  );
};

export default MobileNav;
