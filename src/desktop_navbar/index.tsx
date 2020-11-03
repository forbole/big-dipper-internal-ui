import React from 'react';
import clsx from 'clsx';
import {
  Drawer,
  List,
  AppBar,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useGetStyles } from './styles';
import {
  logo, logoWhite,
} from '../resources/images';
import { useGetHeightHook } from '../utils/get_height_hook';
import { DesktopNavProps } from './types';
import {
  TopActionBar, HeaderBar,
} from './components';
import { Placeholder } from '..';

const DesktopNav = (props:DesktopNavProps) => {
  const { classes } = useGetStyles();
  const theme = useTheme();
  const {
    ref: heightRef,
    height,
  } = useGetHeightHook();

  const {
    sideBar: {
      open,
      onClick,
      items,
      logoSrc = theme?.palette?.type === 'light' ? logo : logoWhite,
    },
    topBar,
  } = props;

  return (
    <div
      className={clsx(classes.root, 'big-dipper', 'desktop-nav')}
    >
      <AppBar
        ref={heightRef}
        position="fixed"
        className={clsx(classes.appBar, 'appbar-container', {
          open,
        })}
      >
        <TopActionBar {...topBar} />
        <HeaderBar />
      </AppBar>
      <Placeholder height={height} />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          open,
          closed: !open,
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            open,
            closed: !open,
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div
          className={clsx('big-dipper-icon', {
            open,
            closed: !open,
          })}
          onClick={onClick}
          role="button"
        >
          <img src={logoSrc} alt="big dipper logo" />
        </div>
        <List>
          {items.map((x, i) => (
            <React.Fragment key={i}>
              {x}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default DesktopNav;
