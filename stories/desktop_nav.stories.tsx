import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  MoveToInbox,
  Mail,
  HomeOutlined,
  PersonOutline,
  CheckBoxOutlineBlankOutlined,
  SyncAltOutlined,
  EventNoteOutlined,
  AnnouncementOutlined,
  PieChartOutlined,
} from '@material-ui/icons';
import {
  DesktopNav, DesktopNavbarItem,
} from '../src';
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
      items: [
        <DesktopNavbarItem text="Home" icon={<HomeOutlined />} />,
        <DesktopNavbarItem text="Validators" icon={<PersonOutline />} />,
        <DesktopNavbarItem text="Blocks" icon={<CheckBoxOutlineBlankOutlined />} />,
        <DesktopNavbarItem text="Activities" icon={<SyncAltOutlined />} />,
        <DesktopNavbarItem text="Proposals" icon={<EventNoteOutlined />} />,
        <DesktopNavbarItem text="News" icon={<AnnouncementOutlined />} />,
        <DesktopNavbarItem text="Analysis" icon={<PieChartOutlined />} />,
      ],
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
