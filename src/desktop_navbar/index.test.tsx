import React from 'react';
import { mount } from 'enzyme';
import { createMuiTheme } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import DesktopNav from '.';
import { WithMockMaterialTheme } from '../utils/theme_mock';

describe('DesktopNav', () => {
  it('Works with base props', () => {
    expect(DesktopNav).toBeTruthy();
    const props = {
      sideBar: {
        open: true,
        onClick: () => {},
        items: [],
      },
      topBar: {
        network: {
          isNetworkOpen: true,
          toggleNetwork: () => {},
          selectedNetwork: {
            value: 'cosmoshub3dfgdgfhghfgh',
            online: true,
            iconSrc: 'https://gist.githubusercontent.com/kwunyeung/8be4598c77c61e497dfc7220a678b3ee/raw/8178b6bcce1d1563bac10f8a150c713724a742f1/cosmoshub.svg?sanitize=true',
          },
          items: [],
        },
        searchBar: {
          searchBarPlaceholder: 'Search by block height / address / tx hash',
          searchBarCallback: () => {},
        },
        themeMode: {
          mode: {
            value: '',
            key: '',
          },
          onClick: () => {},
        },
        language: {
          languages: [
            {
              key: 'en',
              value: 'EN',
            },
            {
              key: 'cn',
              value: '中文',
            },
          ],
          onClick: ({ key, value }: any) => {
            console.log(`Click Value ${value} with key ${key}`);
          },
          selected: {
            key: 'en',
            value: 'EN',
          },
        },
      },
    };
    const wrap = mount(WithMockMaterialTheme({
      component: <DesktopNav
        {...props}
      />,
      theme: createMuiTheme({
      }),
    }));

    expect(wrap).not.toBeNull();
    expect(wrap.find(Drawer)).toHaveLength(1);
  });
});
