import React from 'react';
import { NavProps } from './types';

const Nav = (props: NavProps) => {
  return (
    <div>
      <div>
        <p>logo</p>
        <div>
          <p>selector</p>
          <p>hamburger holder</p>
        </div>
      </div>
      <div>
        searchbar
      </div>
      <div>announcement</div>
    </div>
  );
};

export default Nav;
