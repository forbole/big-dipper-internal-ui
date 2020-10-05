import React from 'react';
import { mount } from 'enzyme';
import { Select } from '@material-ui/core';
import DataBlock from '.';

describe('DataBlock', () => {
  it('Works with no durations', () => {
    expect(DataBlock).toBeTruthy();
    const wrap = mount(
      <DataBlock
        label="Latest Block Height"
        value="15,000"
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.data-block')).toHaveLength(1);
    expect(wrap.find('.header')).toHaveLength(1);
    expect(wrap.find('.label')).toHaveLength(1);
    expect(wrap.find('.duration')).toHaveLength(1);
    expect(wrap.find('.content')).toHaveLength(1);
    expect(wrap.find('.value')).toHaveLength(1);
    expect(wrap.find('.duration').text()).toEqual(undefined || '');
    expect(wrap.find('.custom-component')).toHaveLength(0);
  });

  it('Works with single duration', () => {
    const wrap = mount(
      <DataBlock
        label="Latest Block Height"
        value="15,000"
        durations={[
          {
            value: '7_hours',
            display: 'Last 7 hours',
          },
        ]}
      />,
    );
    expect(wrap.find(Select)).toHaveLength(0);
    expect(wrap.find('.duration').text()).toEqual('Last 7 hours');
  });

  it('Works with multi duration', () => {
    const wrap = mount(
      <DataBlock
        label="Latest Block Height"
        value="15,000"
        selectedValue="24"
        durations={[
          {
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
          },
        ]}
      />,
    );

    expect(wrap.find(Select)).toHaveLength(1);
  });

  it('Works with custom', () => {
    const wrap = mount(
      <DataBlock
        label="Latest Block Height"
        value="15,000"
        selectedValue="24"
        customComponent={<h1>hello world</h1>}
      />,
    );

    expect(wrap.find('.custom-component')).toHaveLength(1);
    expect(wrap.find('.custom-component').text()).toEqual('hello world');
  });
});
