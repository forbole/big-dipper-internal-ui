import React from 'react';
import classnames from 'classnames';
import { NavProps } from './types';
import { useGetStyles } from './styles';
import { Hamburger } from './components';

const Nav = (props: NavProps) => {
  const { classes } = useGetStyles();
  const {
    openNetwork,
    logo: {
      src,
      alt,
    },
  } = props;

  return (
    <div
      className={classnames(classes.root, 'big-dipper', 'mobile-nav-bar')}
    >
      <img
        className={classnames('logo')}
        src={src}
        alt={alt}
      />
      <div className={classnames('action-container')}>
        <div onClick={openNetwork} role="button" className={classnames('network-select')}>
          selector
        </div>
        <Hamburger {...props} />
      </div>
    </div>
  );
};

export default Nav;
