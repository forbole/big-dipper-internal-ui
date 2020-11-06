import React from 'react';
import classnames from 'classnames';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ButtonBase,
} from '@material-ui/core';
import { DesktopNavbarItemProps } from './types';
import { useGetStyles } from './styles';

const NavbarItem = (props:DesktopNavbarItemProps) => {
  const { classes } = useGetStyles();
  const {
    text,
    icon,
    active,
  } = props;
  return (
    <ListItem
      // button
      className={classnames(classes.root, 'big-dipper', 'navbar-item', {
        active,
      })}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default NavbarItem;
