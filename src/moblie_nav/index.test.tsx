import React from 'react';
import { mount } from 'enzyme';
import MobileNav from '.';
import { Announcement } from './components';
import {
  NetworkItem, MenuItem,
} from '../../stories/utils/mobile_nav';

describe('MobileNav/MobileNav', () => {
  it('Works without announcement', () => {
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
          items: [
            <MenuItem value="overview" />,
            <MenuItem value="validator" />,
            <MenuItem value="blocks" />,
            <MenuItem value="activites" />,
            <MenuItem value="proposals" />,
            <MenuItem value="news" />,
            <MenuItem value="analysis" />,
          ],
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
          items: [
            <NetworkItem />,
            <NetworkItem />,
          ],
          openNetwork: function noRefCheck() {},
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

  it('Works without announcement and searchbar', () => {
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
          items: [
            <MenuItem value="overview" />,
            <MenuItem value="validator" />,
            <MenuItem value="blocks" />,
            <MenuItem value="activites" />,
            <MenuItem value="proposals" />,
            <MenuItem value="news" />,
            <MenuItem value="analysis" />,
          ],
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
          items: [
            <NetworkItem />,
            <NetworkItem />,
          ],
          openNetwork: function noRefCheck() {},
          selectedNetwork: {
            online: true,
            value: 'cosmoshub3dfgdgfhghfgh',
          },
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(Announcement)).toHaveLength(0);
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
          items: [
            <MenuItem value="overview" />,
            <MenuItem value="validator" />,
            <MenuItem value="blocks" />,
            <MenuItem value="activites" />,
            <MenuItem value="proposals" />,
            <MenuItem value="news" />,
            <MenuItem value="analysis" />,
          ],
        }}
        network={{
          isNetworkOpen: false,
          items: [
            <NetworkItem />,
            <NetworkItem />,
          ],
          openNetwork: function noRefCheck() {},
          selectedNetwork: {
            online: true,
            value: 'cosmoshub3dfgdgfhghfgh',
          },
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(Announcement)).toHaveLength(0);
  });
});
