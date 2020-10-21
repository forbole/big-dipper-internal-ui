import React from 'react';
import * as R from 'ramda';
import { withKnobs } from '@storybook/addon-knobs';
import { MobileNav } from '../src';
import { ThemeKnob } from './theme_knob';
import { useMobileHook } from './utils/mobile_nav';

export default {
  title: 'Navbar/Mobile',
  component: MobileNav,
  decorators: [withKnobs],
  argTypes: {
    logo: {
      defaultValue: 'hello',
    },
  },
};

const Template = (args) => {
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
    src: './src/resources/images/big-dipper-logo.png',
    alt: 'big dipper logo',
  },
  announcement: 'Did you know that rubber bands last longer when refrigerated.',
  searchBar: {
    searchBarPlaceholder: 'Search by block height / address / tx hash',
    searchBarCallback: (value:string) => console.log('The value: ', value),
  },
  network: {
    network: 'cosmoshub3dfgdgfhghfgh',
    online: true,
  },
  menu: {
  },
  hamburgerIcon: {
  },
};

/**
 * Base with only necessary props
 */
// export const Base = Template.bind({
// });

// Base.args = {
//   ...baseProps,
// };
