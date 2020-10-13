import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Footer } from '../src';
import {
  defaultProps,
  // baseProps,
} from './utils/footer';
import { ThemeKnob } from './theme_knob';

export default {
  title: 'Footer',
  component: Footer,
  decorators: [withKnobs],
};

const Template = (args) => (
  <ThemeKnob>
    <Footer
      {...args}
    />
  </ThemeKnob>
);

/**
 * Default props
 */
export const Default = Template.bind({
});

Default.args = {
  ...defaultProps,
};

/**
 * Base with only necessary props
 */
// export const Base = Template.bind({
// });

// Base.args = {
//   ...baseProps,
// };
