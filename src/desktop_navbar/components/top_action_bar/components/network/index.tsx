import React from 'react';
import { NetworkProps } from './types';

const Network = (props:NetworkProps) => {
  const { network } = props;
  const { openNetwork } = network;

  return (
    <div onClick={openNetwork} role="button">
      network
    </div>
  );
};

export default Network;
