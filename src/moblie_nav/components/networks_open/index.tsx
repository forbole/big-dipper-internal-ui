import React from 'react';
import classnames from 'classnames';
import { NetworksOpenProps } from './types';
import { useGetStyles } from './styles';

const NetworksOpen = (props:NetworksOpenProps) => {
  const { isNetworkOpen = false } = props;
  const { classes } = useGetStyles();

  return (
    <div
      className={classnames(classes.root, 'big-dipper', 'mobile-network-open', {
        open: isNetworkOpen,
      })}
    >
      <div
        className={classnames(classes.content, 'mobile-network-open-content')}
      >
        HELLOOOWWOWOWO
      </div>
    </div>
  );
};

export default NetworksOpen;
