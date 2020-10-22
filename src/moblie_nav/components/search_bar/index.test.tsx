import React from 'react';
import { mount } from 'enzyme';
import SearchBar from '.';

describe('MobileNav/SearchBar', () => {
  it('Works with base props', () => {
    expect(SearchBar).toBeTruthy();
    const wrap = mount(
      <SearchBar
        searchBar={{
          searchBarPlaceholder: 'hello world',
          searchBarCallback: () => {},
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.search-input')).toHaveLength(1);
  });
});
