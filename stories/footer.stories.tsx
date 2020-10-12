import React from 'react';
import { Footer } from '../src';
import { defaultProps } from './utils/footer';

export default {
  title: 'Footer',
  component: Footer,
};

const Template = (args) => (
  <Footer
    {...args}
  />
);

export const Default = Template.bind({
});

Default.args = {
  ...defaultProps,
};
