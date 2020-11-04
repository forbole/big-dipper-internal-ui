import React from 'react';
import classnames from 'classnames';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { DesktopNavbarItemProps } from './types';
import { useGetStyles } from './styles';

const DesktopNavbarItem = (props:DesktopNavbarItemProps) => {
  const { classes } = useGetStyles();
  const {
    text,
    icon,
    active,
  } = props;
  return (
    <ListItem
      button
      className={classnames(classes.root, 'big-dipper', 'desktop-item', {
        active,
      })}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default DesktopNavbarItem;
