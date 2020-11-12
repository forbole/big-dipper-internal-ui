import React from 'react';
import { mount } from 'enzyme';
import NetworksOpen from '.';
import { NetworkItem } from '../../../../../stories/utils/mobile_nav';

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
            items: [
              <NetworkItem />,
              <NetworkItem />,
            ],
            isNetworkOpen: true,
            toggleNetwork: () => {},
          }
        }
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.open')).toHaveLength(1);
    expect(wrap.find(NetworkItem)).toHaveLength(2);
  });
});
