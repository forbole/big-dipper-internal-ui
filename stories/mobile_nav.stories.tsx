import React from 'react';
import * as R from 'ramda';
import { withKnobs } from '@storybook/addon-knobs';
import { MobileNav } from '../src';
import { ThemeKnob } from './theme_knob';
import {
  useMobileHook, MenuItem, NetworkItem,
} from './utils/mobile_nav';

export default {
  title: 'Navbar/Mobile',
  component: MobileNav,
  decorators: [withKnobs],
};

const Template = (args) => {
  const {
    isOpen,
    toggleIsOpen,
    isNetworkOpen,
    isNavOpen,
    openNetwork,
    mode,
    toggleMode,
  } = useMobileHook();

  const stateRelatedProps = {
    network: {
      isNetworkOpen,
      openNetwork,
    },
    menu: {
      isMenuOpen: isNavOpen,
      themeMode: {
        mode,
        onClick: toggleMode,
      },
    },
    hamburgerIcon: {
      isOpen,
      onClick: toggleIsOpen,
    },
  };

  const mergeProps = R.mergeDeepLeft(args, stateRelatedProps);

  return (
    <ThemeKnob>
      <MobileNav
        {...mergeProps}
      />
    </ThemeKnob>
  );
};

const TemplateBase = (args) => {
  const {
    isOpen,
    toggleIsOpen,
    isNetworkOpen,
    isNavOpen,
    openNetwork,
  } = useMobileHook();

  const stateRelatedProps = {
    network: {
      isNetworkOpen,
      openNetwork,
    },
    menu: {
      isMenuOpen: isNavOpen,
    },
    hamburgerIcon: {
      isOpen,
      onClick: toggleIsOpen,
    },
  };

  const mergeProps = R.mergeDeepLeft(args, stateRelatedProps);

  return (
    <ThemeKnob>
      <MobileNav
        {...mergeProps}
      />
    </ThemeKnob>
  );
};

/**
 * Mobile props
 */
export const Default = Template.bind({
});

Default.args = {
  logo: {
    alt: 'big dipper logo',
  },
  announcement: 'Did you know that rubber bands last longer when refrigerated.',
  searchBar: {
    searchBarPlaceholder: 'Search by block height / address / tx hash',
    searchBarCallback: (value:string) => console.log('The value: ', value),
  },
  network: {
    selectedNetwork: {
      value: 'cosmoshub3dfgdgfhghfgh',
      online: true,
    },
    items: [
      <NetworkItem />,
      <NetworkItem />,
    ],
  },
  menu: {
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
          value: '中文',
        },
      ],
      onClick: ({ key, value }) => {
        console.log(`Click Value ${value} with key ${key}`);
      },
    },
    items: [
      <MenuItem value="overview" />,
      <MenuItem value="validator" />,
      <MenuItem value="blocks" />,
      <MenuItem value="activites" />,
      <MenuItem value="proposals" />,
      <MenuItem value="news" />,
      <MenuItem value="analysis" />,
    ],
  },
};

// =====================================
// Base
// =====================================
export const Base = TemplateBase.bind({
});

Base.args = {
  logo: {
    alt: 'big dipper logo',
  },
  menu: {
    items: [
      <MenuItem value="overview" />,
      <MenuItem value="validator" />,
      <MenuItem value="blocks" />,
      <MenuItem value="activites" />,
      <MenuItem value="proposals" />,
      <MenuItem value="news" />,
      <MenuItem value="analysis" />,
    ],
  },
};
