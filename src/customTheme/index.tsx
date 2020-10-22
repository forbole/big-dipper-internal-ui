import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { ThemeProps } from './types';

export const CustomTheme = (props: ThemeProps) => {

  const {
    putGird = [],
  } = props;

  const themeLocal = createMuiTheme({
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      values: {
        xs: 0, sm: 568, md: 760, lg: 1080, xl: 1200,
      },
    },
  });

  return (
    <MuiThemeProvider
      theme={themeLocal}>
        {putGird}
    </MuiThemeProvider>
  );
};

export default CustomTheme;
