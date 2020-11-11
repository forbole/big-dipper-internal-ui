import React from 'react';
import { mount } from 'enzyme';
import Placeholder from '.';

describe('MobileNav/Placeholder', () => {
  it('Works with base props', () => {
    expect(Placeholder).toBeTruthy();
    const wrap = mount(
      <Placeholder
        height={100}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.placeholder')).toHaveLength(1);
  });
});
