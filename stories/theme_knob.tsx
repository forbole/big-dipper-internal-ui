/* eslint-disable */
import React from 'react';
import {
  ThemeProvider,
} from '@material-ui/core/styles';
import { select } from '@storybook/addon-knobs';
import {darkTheme, lightTheme} from './themes/theme';

const themes = {
  light: lightTheme,
  dark: darkTheme,
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
  console.log(themes[theme],'wtf');

  return (
    <ThemeProvider theme={themes[theme]}>
      {children}
    </ThemeProvider>
  );
};
