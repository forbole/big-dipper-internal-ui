import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { DesktopNav } from '../src';
import { ThemeKnob } from './theme_knob';
import {
  TextHolders, useDesktopNavHook,
} from './utils/desktop_nav';

export default {
  title: 'Navbar/Desktop',
  component: DesktopNav,
  decorators: [withKnobs],
};

const Template = (args) => {
  const {
    open,
    toggleDraw,
  } = useDesktopNavHook();
  const hookProps = {
    sideBar: {
      open,
      onClick: toggleDraw,
    },
  };

  return (
    <ThemeKnob>
      <DesktopNav
        {...args}
        {...hookProps}
      />
      <TextHolders {...hookProps} />
    </ThemeKnob>
  );
};

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
