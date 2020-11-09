import React from 'react';
import { mount } from 'enzyme';
import NetworkOpen from '.';
import { TopActionBar } from '..';

describe('NetworkOpen', () => {
  it('Works with base props', () => {
    expect(NetworkOpen).toBeTruthy();
    const wrap = mount(
      <NetworkOpen
        topBar={{
          themeMode: {
            mode: {
              value: 'light',
              key: 'light',
            },
            onClick: () => {},
          },
          searchBar: {
            searchBarPlaceholder: 'Search by block height / address / tx hash',
            searchBarCallback: () => {},
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
            onClick: ({ key, value }) => {
              console.log(`Click Value ${value} with key ${key}`);
            },
            selected: {
              key: 'en',
              value: 'EN',
            },
          },
          network: {
            isNetworkOpen: true,
            items: [],
            toggleNetwork: () => {},
            selectedNetwork: {
              value: '',
              iconSrc: '',
            },
          },
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(TopActionBar)).toHaveLength(1);
  });
});
