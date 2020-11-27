import React from 'react';
import { mount } from 'enzyme';
import MobileNav from '.';
import { NavbarAnnouncement } from '../..';

describe('MobileNav/MobileNav', () => {
  it('Works without NavbarAnnouncement', () => {
    expect(MobileNav).toBeTruthy();

    const wrap = mount(
      <MobileNav
        hamburgerIcon={{
          isOpen: false,
          onClick: () => {},
        }}
        logo={{
          alt: 'big dipper logo',
          src: './src/resources/images/big-dipper-logo.png',
        }}
        menu={{
          isMenuOpen: false,
          items: [],
          language: {
            languages: [
              {
                key: 'en',
                value: 'English',
              },
              {
                key: 'cn',
                value: '中文',
              },
            ],
            onClick: function noRefCheck() {},
            selected: {
              key: 'en',
              value: 'English',
            },
          },
          themeMode: {
            mode: {
              key: 'light',
              value: 'light mode',
            },
            onClick: function noRefCheck() {},
          },
        }}
        network={{
          isNetworkOpen: false,
          items: [],
          toggleNetwork: function noRefCheck() {},
          selectedNetwork: {
            online: true,
            value: 'cosmoshub3dfgdgfhghfgh',
          },
        }}
        searchBar={{
          searchBarCallback: function noRefCheck() {},
          searchBarPlaceholder: 'Search by block height / address / tx hash',
        }}
      />,
    );
    expect(wrap).not.toBeNull();
  });

  it('Works without NavbarAnnouncement and searchbar', () => {
    expect(MobileNav).toBeTruthy();

    const wrap = mount(
      <MobileNav
        hamburgerIcon={{
          isOpen: false,
          onClick: () => {},
        }}
        logo={{
          alt: 'big dipper logo',
          src: './src/resources/images/big-dipper-logo.png',
        }}
        menu={{
          isMenuOpen: false,
          items: [],
          language: {
            languages: [
              {
                key: 'en',
                value: 'English',
              },
              {
                key: 'cn',
                value: '中文',
              },
            ],
            onClick: function noRefCheck() {},
            selected: {
              key: 'en',
              value: 'English',
            },
          },
          themeMode: {
            mode: {
              key: 'light',
              value: 'light mode',
            },
            onClick: function noRefCheck() {},
          },
        }}
        network={{
          isNetworkOpen: false,
          items: [],
          toggleNetwork: function noRefCheck() {},
          selectedNetwork: {
            online: true,
            value: 'cosmoshub3dfgdgfhghfgh',
          },
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(NavbarAnnouncement)).toHaveLength(0);
  });

  it('Works without language', () => {
    expect(MobileNav).toBeTruthy();

    const wrap = mount(
      <MobileNav
        hamburgerIcon={{
          isOpen: false,
          onClick: () => {},
        }}
        logo={{
          alt: 'big dipper logo',
          src: './src/resources/images/big-dipper-logo.png',
        }}
        menu={{
          isMenuOpen: false,
          items: [],
        }}
        network={{
          isNetworkOpen: false,
          items: [],
          toggleNetwork: function noRefCheck() {},
          selectedNetwork: {
            online: true,
            value: 'cosmoshub3dfgdgfhghfgh',
          },
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(NavbarAnnouncement)).toHaveLength(0);
  });
});
