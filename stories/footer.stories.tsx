import React from 'react';
import { Footer } from '../src';
import {
  defaultProps, baseProps,
} from './utils/footer';

export default {
  title: 'Footer',
  component: Footer,
};

const Template = (args) => (
  <Footer
    {...args}
  />
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
export const Base = Template.bind({
});

Base.args = {
  ...baseProps,
};
