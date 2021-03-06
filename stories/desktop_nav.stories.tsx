import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  HomeOutlined,
  PersonOutline,
  CheckBoxOutlineBlankOutlined,
  SyncAltOutlined,
  EventNoteOutlined,
  AnnouncementOutlined,
  PieChartOutlined,
} from '@material-ui/icons';
import {
  DesktopNav,
  NavbarItem,
  HeaderBarDesktop,
} from '../src';
import { ThemeKnob } from './theme_knob';
import {
  TextHolders,
  useDesktopNavHook,
  NetworkItem,
  defaultArgs,
} from './utils/desktop_nav';

export default {
  title: 'Navbar/Desktop',
  component: DesktopNav,
  decorators: [withKnobs],
  argTypes: defaultArgs,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
};

const Template = (args) => {
  const {
    open,
    toggleDraw,
    toggleMode,
    mode,
    toggleNetwork,
    isNetworkOpen,
  } = useDesktopNavHook();

  const hookProps = {
    sideBar: {
      open,
      onClick: toggleDraw,
      items: [
        <NavbarItem active text="Home" icon={<HomeOutlined />} />,
        <NavbarItem text="Validators" icon={<PersonOutline />} />,
        <NavbarItem text="Blocks" icon={<CheckBoxOutlineBlankOutlined />} />,
        <NavbarItem text="Activities" icon={<SyncAltOutlined />} />,
        <NavbarItem text="Proposals" icon={<EventNoteOutlined />} />,
        <NavbarItem text="News" icon={<AnnouncementOutlined />} />,
        <NavbarItem text="Analysis" icon={<PieChartOutlined />} />,
      ],
    },
    topBar: {
      header: <HeaderBarDesktop
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
      />,
      network: {
        isNetworkOpen,
        toggleNetwork,
        selectedNetwork: {
          value: 'cosmoshub3dfgdgfhghfgh',
          online: true,
          iconSrc: 'https://gist.githubusercontent.com/kwunyeung/8be4598c77c61e497dfc7220a678b3ee/raw/8178b6bcce1d1563bac10f8a150c713724a742f1/cosmoshub.svg?sanitize=true',
        },
        items: [
          <NetworkItem />,
          <NetworkItem />,
          <NetworkItem />,
          <NetworkItem />,
          <NetworkItem />,
          <NetworkItem />,
        ],
      },
      searchBar: {
        searchBarPlaceholder: 'Search by block height / address / tx hash',
        searchBarCallback: (value:string) => console.log('The value: ', value),
      },
      themeMode: {
        mode,
        onClick: toggleMode,
      },
      language: {
        languages: [
          {
            key: 'en',
            value: 'EN',
          },
          {
            key: 'cn',
            value: '中文',
          },
        ],
        onClick: ({ key, value }) => {
          console.log(`Click Value ${value} with key ${key}`);
        },
        selected: {
          key: 'en',
          value: 'EN',
        },
      },
    },
  };

  return (
    <ThemeKnob>
      <DesktopNav
        {...args}
        {...hookProps}
      />
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
