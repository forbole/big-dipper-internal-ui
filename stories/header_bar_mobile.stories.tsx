import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { HeaderBarMobile } from '../src';
import { ThemeKnob } from './theme_knob';

export default {
  title: 'HeaderBarMobile',
  component: HeaderBarMobile,
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
      <HeaderBarMobile
        title="Cosmos Hub 3"
        market={[
          {
            key: 'Price',
            value: '$22222222222.75',
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
