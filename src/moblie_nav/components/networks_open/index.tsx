import React from 'react';
import classnames from 'classnames';
import { NetworksOpenProps } from './types';
import { useGetStyles } from './styles';

const NetworksOpen = (props:NetworksOpenProps) => {
  const {
    network: {
      isNetworkOpen,
      items,
    },
  } = props;

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
        {items?.map((x, i) => (
          <React.Fragment key={i}>
            {x}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NetworksOpen;
