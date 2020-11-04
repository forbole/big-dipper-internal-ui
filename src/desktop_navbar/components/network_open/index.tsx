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
  const { network: { isNetworkOpen } } = topBar;
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius dui
      </div>
    </Box>
  );
};

export default NetworkOpen;
