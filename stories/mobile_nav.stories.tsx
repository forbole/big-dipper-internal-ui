import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { MobileNav } from '../src';
import { ThemeKnob } from './theme_knob';

export default {
  title: 'Navbar/Mobile',
  component: MobileNav,
  decorators: [withKnobs],
};

const Template = (args) => (
  <ThemeKnob>
    <MobileNav
      {...args}
    />
  </ThemeKnob>
);

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
  searchBar: true,
  announcement: true,
  searchBarPlaceholder: 'Search by block height / address / tx hash',
  searchBarCallback: (value:string) => console.log('The value: ', value),
};

/**
 * Base with only necessary props
 */
// export const Base = Template.bind({
// });

// Base.args = {
//   ...baseProps,
// };
