import React from 'react';
import { mount } from 'enzyme';
import NetworksOpen from '.';

describe('MobileNav/NetworksOpen', () => {
  it('Works with base props', () => {
    expect(NetworksOpen).toBeTruthy();
    const wrap = mount(
      <NetworksOpen
        network={
          {
            selectedNetwork: {
              value: 'cosmos',
              online: true,
            },
            items: [],
            isNetworkOpen: true,
            toggleNetwork: () => {},
          }
        }
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.open')).toHaveLength(1);
  });
});
