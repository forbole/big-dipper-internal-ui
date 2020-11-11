import React from 'react';
import { mount } from 'enzyme';
import { NotificationsActiveOutlined } from '@material-ui/icons';
import Announcement from '.';

describe('MobileNav/Announcement', () => {
  it('Works with base props', () => {
    expect(Announcement).toBeTruthy();
    const wrap = mount(
      <Announcement
        announcement="hello world"
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(NotificationsActiveOutlined)).toHaveLength(1);
    expect(wrap.find('.announcement-text').first().text()).toEqual('hello world');
  });
});
