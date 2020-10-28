import React from 'react';
import { mount } from 'enzyme';
import Grid from '.';

describe('Grid', () => {
  it('Works with base props', () => {
    expect(Grid).toBeTruthy();
    const wrap = mount(
      <Grid item xs={12} desktop={6} />,
    );
    expect(wrap).not.toBeNull();
  });

});
