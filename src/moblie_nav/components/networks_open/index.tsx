import React from 'react';
import classnames from 'classnames';
import { NetworksOpenProps } from './types';
import { useNetworksOpenHook } from './hooks';
import { useGetStyles } from './styles';

const NetworksOpen = (props:NetworksOpenProps) => {
  const { isNetworkOpen = false } = props;
  const { classes } = useGetStyles();
  const { animationClass } = useNetworksOpenHook({
    isNetworkOpen,
  });
  console.log(animationClass, 'animation class');
  return (
    <div
      className={classnames(classes.root, animationClass, 'big-dipper', 'mobile-network-open')}
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
