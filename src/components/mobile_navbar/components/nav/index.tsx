import React from 'react';
import classnames from 'classnames';
import { ExpandMore } from '@material-ui/icons';
import { NavProps } from './types';
import { useGetStyles } from './styles';
import { Hamburger } from './components';
import { useNavHook } from './hooks';

const Nav = (props: NavProps) => {
  const { classes } = useGetStyles();
  const {
    network,
    logo: {
      src,
      alt,
      onClick,
    },
  } = props;
  const { handleLogoClick } = useNavHook(onClick);

  return (
    <div
      className={classnames(classes.root, 'big-dipper', 'mobile-nav-bar')}
    >
      <span
        onClick={handleLogoClick}
        role="button"
        className={classnames('logo-container')}
      >
        <img
          className={classnames('logo')}
          src={src}
          alt={alt}
        />
      </span>
      <div className={classnames('action-container')}>
        {!!network?.selectedNetwork?.value && (
          <div
            className={classnames('network-container')}
            onClick={network?.toggleNetwork}
            role="button"
          >
            <div
              className={classnames('network-select-text', {
                online: network?.selectedNetwork?.online,
                offline: !network?.selectedNetwork?.online,
              })}
            >
              {network?.selectedNetwork?.value}
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
