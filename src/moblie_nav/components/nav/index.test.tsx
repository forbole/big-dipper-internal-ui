import React from 'react';
import { mount } from 'enzyme';
import Nav from '.';
import { Hamburger } from './components';

describe('MobileNav/Nav', () => {
  it('Works with base props', () => {
    expect(Nav).toBeTruthy();
    const wrap = mount(
      <Nav
        network={
          {
            selectedNetwork: {
              value: 'cosmos',
              online: true,
            },
            items: [],
            isNetworkOpen: true,
            openNetwork: () => {},
          }
        }
        logo={{
          alt: 'logo',
        }}
        hamburgerIcon={{
          isOpen: true,
          onClick: () => {},
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(Hamburger)).toHaveLength(1);
    expect(wrap.find('.online')).toHaveLength(1);
  });

  it('Works without network', () => {
    expect(Nav).toBeTruthy();
    const wrap = mount(
      <Nav
        logo={{
          alt: 'logo',
        }}
        hamburgerIcon={{
          isOpen: true,
          onClick: () => {},
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.network-container')).toHaveLength(0);
  });
});
