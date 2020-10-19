import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { DesktopNav } from '../src';
import { ThemeKnob } from './theme_knob';

export default {
  title: 'Navbar/Desktop',
  component: DesktopNav,
  decorators: [withKnobs],
};

const Template = (args) => (
  <ThemeKnob>
    <DesktopNav
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
