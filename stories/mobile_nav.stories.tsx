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

};

/**
 * Base with only necessary props
 */
// export const Base = Template.bind({
// });

// Base.args = {
//   ...baseProps,
// };
