import React from 'react';
import clsx from 'clsx';
import {
  Drawer,
  AppBar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  MoveToInbox,
  Mail,
} from '@material-ui/icons';
import { useGetStyles } from './styles';
import {
  bigDipperIcon, logo,
} from '../resources/images';
import { DesktopNavProps } from './types';

const DesktopNav = (props:DesktopNavProps) => {
  const { classes } = useGetStyles();
  const {
    sideBar: {
      open,
      onClick,
    },
  } = props;

  return (
    <div
      className={clsx(classes.root, 'big-dipper', 'desktop-nav')}
    >
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, 'appbar-container', {
          open,
        })}
      >
        <div>
          hello world
        </div>
      </AppBar>
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
          <img src={logo} alt="big dipper logo" />
        </div>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default DesktopNav;
