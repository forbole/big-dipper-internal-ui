import React from 'react';
import { mount } from 'enzyme';
import { Drawer } from '@material-ui/core';
import MenuOpen from '.';
import { LanguageDrawer } from './components';

describe('MobileNav/Announcement', () => {
  it('Works with base props', () => {
    expect(MenuOpen).toBeTruthy();

    const wrap = mount(
      <MenuOpen
        menu={{
          isMenuOpen: true,
          items: [],
          language: {
            selected: {
              key: 'en',
              value: 'English',
            },
            languages: [
              {
                key: 'en',
                value: 'English',
              },
              {
                key: 'cn',
                value: 'Chinese',
              },
            ],
            onClick: () => {},
          },
          themeMode: {
            mode: {
              value: 'light mode',
              key: 'light',
            },
            onClick: () => {},
          },
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(LanguageDrawer)).toHaveLength(1);
    expect(wrap.find(Drawer)).toHaveLength(1);
  });

  describe('MobileNav/Announcement', () => {
    it('Language select works', () => {
      expect(MenuOpen).toBeTruthy();

      const spyHelpers = {
        languageClick() {
          return true;
        },
      };

      const languageSpy = jest.spyOn(spyHelpers, 'languageClick');

      const wrap = mount(
        <MenuOpen
          menu={{
            isMenuOpen: true,
            items: [],
            language: {
              selected: {
                key: 'en',
                value: 'English',
              },
              languages: [
                {
                  key: 'en',
                  value: 'English',
                },
                {
                  key: 'cn',
                  value: 'Chinese',
                },
              ],
              onClick: spyHelpers.languageClick,
            },
            themeMode: {
              mode: {
                value: 'light mode',
                key: 'light',
              },
              onClick: () => {},
            },
          }}
        />,
      );
      wrap.find('.language-selector').first().simulate('click');
      expect(wrap.find('.language-drawer').first().find('.item')).toHaveLength(2);
      wrap.find('.language-drawer').first().find('.item').first()
        .simulate('click');
      expect(languageSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('MobileNav/Announcement', () => {
    it('Theme mode select works', () => {
      expect(MenuOpen).toBeTruthy();

      const spyHelpers = {
        themeClick() {
          return true;
        },
      };

      const languageSpy = jest.spyOn(spyHelpers, 'themeClick');

      const wrap = mount(
        <MenuOpen
          menu={{
            isMenuOpen: true,
            items: [],
            language: {
              selected: {
                key: 'en',
                value: 'English',
              },
              languages: [
                {
                  key: 'en',
                  value: 'English',
                },
                {
                  key: 'cn',
                  value: 'Chinese',
                },
              ],
              onClick: () => {},
            },
            themeMode: {
              mode: {
                value: 'light mode',
                key: 'light',
              },
              onClick: spyHelpers.themeClick,
            },
          }}
        />,
      );
      wrap.find('.theme-container').first().simulate('click');
      expect(languageSpy).toHaveBeenCalledTimes(1);
    });
  });
});
