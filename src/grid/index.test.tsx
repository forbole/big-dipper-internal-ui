import React from 'react';
import { mount } from 'enzyme';
import Grid from '.';
// jest.dontMock('../src/grid')
describe('Grid', () => {
  it('Works with base props', () => {
    expect(Grid).toBeTruthy();
    const wrap = mount(
      <Grid item xs={12} desktop={6} />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.MuiGrid-grid-xs-12')).toHaveLength(1);
    expect(wrap.find('.MuiGrid-grid-desktop-6')).toHaveLength(1);
  });
});
