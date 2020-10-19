import React from 'react';
import classnames from 'classnames';
import { NavProps } from './types';
import { useGetStyles } from './styles';

const Nav = (props: NavProps) => {
  const { classes } = useGetStyles();
  const {
    logo: {
      src,
      alt,
    },
  } = props;

  return (
    <div
      className={classnames(classes.root, 'big-dipper', 'mobile-nav-bar')}
    >
      <div className={classnames('top-bar-container')}>
        <img
          className={classnames('logo')}
          src={src}
          alt={alt}
        />
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
