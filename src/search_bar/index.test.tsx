import React from 'react';
import { mount } from 'enzyme';
import SearchBar from '.';

describe('MobileNav/SearchBar', () => {
  it('Works with base props', () => {
    const spyHelpers = {
      submit() {
        return true;
      },
    };
    const submitSpy = jest.spyOn(spyHelpers, 'submit');
    expect(SearchBar).toBeTruthy();
    const wrap = mount(
      <SearchBar
        searchBar={{
          searchBarPlaceholder: 'hello world',
          searchBarCallback: spyHelpers.submit,
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.search-input')).toHaveLength(1);
    wrap.find('input').simulate('change', {
      target: {
        value: 'abcdefg',
      },
    });
    wrap.find('input').simulate('keydown', {
      keyCode: 13,
      shiftKey: false,
    });
    expect(submitSpy).toHaveBeenCalledTimes(1);
  });
});
