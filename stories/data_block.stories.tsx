import React from 'react';
import { DataBlock } from '../src';
import { DataBlockCustom } from './utils/data_block';

export default {
  title: 'DataBlock',
  component: DataBlock,
};

const Template = (args) => (
  <DataBlock
    {...args}
  />
);

export const WithCustom = Template.bind({
});
WithCustom.args = {
  label: 'Latest Block Height',
  value: '15,000',
  selectedValue: '24',
  customComponent: <DataBlockCustom />,
  durations: [{
    value: '7_hours',
    display: 'Last 7 hours',
    callback: (key) => {
      console.log(`called with key: ${key}`);
    },
  }, {
    value: '24',
    display: '24 hours',
    callback: (key) => {
      console.log(`called with key: ${key}`);
    },
  }],
};

export const NoDurations = Template.bind({
});
NoDurations.args = {
  label: 'Latest Block Height',
  value: '15,000',
};

export const SingleDuration = Template.bind({
});
SingleDuration.args = {
  label: 'Latest Block Height',
  value: '15,000',
  durations: [{
    value: '7_hours',
    display: 'Last 7 hours',
  }],
};

export const MultiDurations = Template.bind({
});
MultiDurations.args = {
  label: 'Latest Block Height',
  value: '15,000',
  selectedValue: '24',
  durations: [{
    value: '7_hours',
    display: 'Last 7 hours',
    callback: (key) => {
      console.log(`called with key: ${key}`);
    },
  }, {
    value: '24',
    display: '24 hours',
    callback: (key) => {
      console.log(`called with key: ${key}`);
    },
  }],
};
