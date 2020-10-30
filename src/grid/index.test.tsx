import {
  createMuiTheme, ThemeProvider,
} from '@material-ui/core/styles';
import React from 'react';
import { mount } from 'enzyme';
import Grid from '.';

export const common:any = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl', 'mobile', 'tablet', 'desktop'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      mobile: 0,
      tablet: 769,
      desktop: 1080,
      maxWidth: 1100,
    },
  },
};

export const theme = createMuiTheme(common);
describe('Grid', () => {
  it('Works with base props', () => {
    expect(Grid).toBeTruthy();
    const wrap = mount(

      <ThemeProvider theme={theme}>
        <Grid item xs={12} desktop={6} />
      </ThemeProvider>,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.MuiGrid-grid-xs-12')).toHaveLength(1);
    expect(wrap.find('.MuiGrid-grid-desktop-6')).toHaveLength(1);
    expect(wrap.find('.MuiGrid-grid-md-12')).toHaveLength(0);
  });
});
