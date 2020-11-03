import React from 'react';
import classnames from 'classnames';
import {
  Brightness4Outlined,
  Brightness4,
} from '@material-ui/icons';
import { ThemeModeProps } from './types';
import { useGetStyles } from './styles';

const ThemeMode = (props:ThemeModeProps) => {
  const { themeMode } = props;
  const IconMode = themeMode.mode.key === 'light' ? Brightness4Outlined : Brightness4;
  const { classes } = useGetStyles();
  return (
    <div
      className={classnames(classes.root, 'theme-icon')}
      onClick={themeMode.onClick}
      role="button"
    >
      <IconMode />
    </div>
  );
};

export default ThemeMode;
