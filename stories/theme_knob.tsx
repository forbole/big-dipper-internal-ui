/* eslint-disable */
import React from 'react';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { select } from '@storybook/addon-knobs';
import {dark, light} from './themes/theme';

const themes = {
  light,
  dark,
};
const themeNames = Object.keys(themes);

export const ThemeKnob =  ({ children }) => {
// label, options, defaultvalue, groupid
  const theme = select(
    'Theme',
    themeNames,
    'light',
    'Themes',
  );

  return (
    <ThemeProvider theme={themes[theme]}>
      {children}
    </ThemeProvider>
  );
};
