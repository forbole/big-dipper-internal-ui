import React from 'react';
import classnames from 'classnames';
import { NavProps } from './types';
import { useGetStyles } from './styles';
import { Hamburger } from './components';

const Nav = (props: NavProps) => {
  const { classes } = useGetStyles();
  const {
    openNetwork,
    searchBar,
    logo: {
      src,
      alt,
    },
  } = props;

  return (
    <div
      className={classnames(classes.root, 'big-dipper', 'mobile-nav-bar')}
    >
      {/* topbar start */}
      {/* <div className={classnames('top-bar-container')}> */}
      <img
        className={classnames('logo')}
        src={src}
        alt={alt}
      />
      {/* action container start */}
      <div className={classnames('action-container')}>
        <div onClick={openNetwork} role="button" className={classnames('network-select')}>
          selector
        </div>
        <Hamburger {...props} />
      </div>
      {/* action container end */}
      {/* </div> */}
      {/* topbar end */}
      {/* <div>announcement</div> */}
    </div>
  );
};

export default Nav;
