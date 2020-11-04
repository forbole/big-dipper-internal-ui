import React from 'react';
import classnames from 'classnames';
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useGetStyles } from './styles';
import { TopActionBar } from '..';
import { NetworkOpenProps } from './types';
import {
  logo, logoWhite,
} from '../../../resources/images';

const NetworkOpen = (props:NetworkOpenProps) => {
  const { topBar } = props;
  const {
    network: {
      isNetworkOpen,
      items,
    },
  } = topBar;
  const { classes } = useGetStyles();
  const theme = useTheme();
  const logoSrc = theme?.palette?.type === 'light' ? logo : logoWhite;
  return (
    <Box
      boxShadow={3}
      className={classnames(classes.root, 'big-dipper', 'network-open', {
        open: isNetworkOpen,
      })}
    >
      <div className={classnames('actions')}>
        <img src={logoSrc} alt="big-dipper-logo" className={classnames('logo')} />
        <TopActionBar {...topBar} />
      </div>
      <div className={classnames('content')}>
        {items.map((x, i) => (
          <React.Fragment key={i}>
            {x}
          </React.Fragment>
        ))}
      </div>
    </Box>
  );
};

export default NetworkOpen;
