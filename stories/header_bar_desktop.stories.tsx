import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { HeaderBarDesktop } from '../src';
import { ThemeKnob } from './theme_knob';

export default {
  title: 'HeaderBarDesktop',
  component: HeaderBarDesktop,
  decorators: [withKnobs],
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
};

export const Default = () => {
  return (
    <ThemeKnob>
      <HeaderBarDesktop
        title="Cosmos Hub 3"
        announcement="Did you know that rubber bands last longer when refrigerated."
        market={[
          {
            key: 'Price',
            value: '$2.75',
          },
          {
            key: 'Market Cap',
            value: '$515,555.75',
          },
          {
            key: 'Inflation',
            value: '7.95%',
          },
          {
            key: 'Community Pool',
            value: '3,400,000 ATOM',
          },
        ]}
      />
    </ThemeKnob>
  );
};
