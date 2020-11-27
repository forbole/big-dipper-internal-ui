import React from 'react';
import clsx from 'clsx';
import {
  Drawer,
  List,
  AppBar,
  ClickAwayListener,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useGetStyles } from './styles';
import {
  logo, logoWhite,
} from '../../resources/images';
import { useGetHeightHook } from '../../utils/get_height_hook';
import { DesktopNavProps } from './types';
import {
  TopActionBar, NetworkOpen,
} from './components';
import { useDesktopNavbarHook } from './hooks';
import { Placeholder } from '../..';

/**
 * DesktopNav bar component used across the app
 */
const DesktopNav = (props:DesktopNavProps) => {
  const { classes } = useGetStyles();
  const theme = useTheme();
  const {
    sideBar,
    topBar,
  } = props;

  const {
    open,
    onClick,
    items,
    logoSrc = theme?.palette?.type === 'light' ? logo : logoWhite,
  } = sideBar;

  const {
    ref: heightRef,
    height,
  } = useGetHeightHook();

  const { handleClickAway } = useDesktopNavbarHook({
    sideBar,
    network: topBar.network,
  });

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
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
          {!!topBar?.header && (
            topBar.header
          )}
        </AppBar>
        <Placeholder height={height} />
        <NetworkOpen topBar={topBar} />
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
    </ClickAwayListener>
  );
};

export default DesktopNav;
