import React from 'react';
import { mount } from 'enzyme';
import { HomeOutlined } from '@material-ui/icons';
import DesktopNavbarItem from '.';

describe('DesktopNavbarItem', () => {
  it('Works with base props', () => {
    expect(DesktopNavbarItem).toBeTruthy();
    const wrap = mount(
      <DesktopNavbarItem
        text="a text"
        icon={<HomeOutlined />}
        active
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(HomeOutlined)).toHaveLength(1);
  });
});
