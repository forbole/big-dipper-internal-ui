import React from 'react';
import classnames from 'classnames';
import { NetworksOpenProps } from './types';
import { useNetworksOpenHook } from './hooks';
import { useGetStyles } from './styles';

const NetworksOpen = (props:NetworksOpenProps) => {
  const { isNetworkOpen = false } = props;
  const { classes } = useGetStyles();
  const { shouldAnimate } = useNetworksOpenHook({
    isNetworkOpen,
  });

  return (
    <div
      className={classnames(classes.root, 'big-dipper', 'mobile-network-open', {
        open: isNetworkOpen && shouldAnimate,
        close: !isNetworkOpen && shouldAnimate,
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
