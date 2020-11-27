import React from 'react';
import { mount } from 'enzyme';
import HeaderBarDesktop from '.';
import { NavbarAnnouncement } from '../..';

describe('HeaderBarDesktop', () => {
  it('Works with base props', () => {
    expect(HeaderBarDesktop).toBeTruthy();
    const wrap = mount(
      <HeaderBarDesktop
        announcement="A fun fact"
        title="Dashboard"
        market={[]}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(NavbarAnnouncement)).toHaveLength(1);
    expect(wrap.find('.market-price')).toHaveLength(1);
    expect(wrap.find('.market-price-item')).toHaveLength(0);
    expect(wrap.find('h3').text()).toEqual('Dashboard');
  });
});
