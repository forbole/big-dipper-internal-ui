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
            items: [
              <div className="item-one">one</div>,
              <div>two</div>,
            ],
            isNetworkOpen: true,
            toggleNetwork: () => {},
          }
        }
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.open')).toHaveLength(1);
    expect(wrap.find('.item-one')).toHaveLength(1);
    expect(wrap.find('.item-one').text()).toEqual('one');
  });
});
