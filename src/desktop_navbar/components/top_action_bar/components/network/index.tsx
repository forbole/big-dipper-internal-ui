import React from 'react';
import classnames from 'classnames';
import { ExpandMore } from '@material-ui/icons';
import { NetworkProps } from './types';
import { useGetStyles } from './styles';

const Network = (props:NetworkProps) => {
  const { network } = props;
  const { openNetwork } = network;
  const { classes } = useGetStyles();
  const {
    selectedNetwork: {
      value,
      iconSrc,
    },
  } = network;

  return (
    <div
      className={classnames(classes.root, 'desktop-nav', 'selected-network')}
      onClick={openNetwork}
      role="button"
    >
      <img src={iconSrc} alt={value} className={classnames('network-icon')} />
      <span className={classnames('network-value')}>
        {value}
      </span>
      <ExpandMore />
    </div>
  );
};

export default Network;
