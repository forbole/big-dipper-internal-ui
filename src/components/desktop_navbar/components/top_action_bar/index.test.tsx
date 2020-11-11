import React from 'react';
import { mount } from 'enzyme';
import TopActionBar from '.';
import {
  Languages,
  ThemeMode,
  Network,
} from './components';

describe('TopActionBar', () => {
  it('Works with base props', () => {
    expect(TopActionBar).toBeTruthy();
    const wrap = mount(
      <TopActionBar
        themeMode={{
          mode: {
            value: 'light',
            key: 'light',
          },
          onClick: () => {},
        }}
        searchBar={{
          searchBarPlaceholder: 'Search by block height / address / tx hash',
          searchBarCallback: () => {},
        }}
        language={{
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
          onClick: ({ key, value }) => {
            console.log(`Click Value ${value} with key ${key}`);
          },
          selected: {
            key: 'en',
            value: 'EN',
          },
        }}
        network={{
          isNetworkOpen: true,
          items: [],
          toggleNetwork: () => {},
          selectedNetwork: {
            value: '',
            iconSrc: '',
          },
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(Languages)).toHaveLength(1);
    expect(wrap.find(ThemeMode)).toHaveLength(1);
    expect(wrap.find(Network)).toHaveLength(1);
  });
});
