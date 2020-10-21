import React from 'react';
import classnames from 'classnames';
import { ExpandMore } from '@material-ui/icons';
import { NavProps } from './types';
import { useGetStyles } from './styles';
import { Hamburger } from './components';

const Nav = (props: NavProps) => {
  const { classes } = useGetStyles();
  const {
    network,
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
        {!!network && (
          <div
            className={classnames('network-container')}
            onClick={network?.openNetwork}
            role="button"
          >
            <div
              className={classnames('network-select-text', {
                online: network?.online,
                offline: !network?.online,
              })}
            >
              {network?.network}
            </div>
            <ExpandMore fontSize="small" />
          </div>
        )}
        <Hamburger {...props} />
      </div>
    </div>
  );
};

export default Nav;
