import React from 'react';
import classnames from 'classnames';
import { NavProps } from './types';
import { useGetStyles } from './styles';

const Nav = (props: NavProps) => {
  console.log(props, 'props');
  const { classes } = useGetStyles();

  return (
    <div
      className={classnames(classes.root, 'big-dipper', 'mobile-nav')}
    >
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
