import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  Footer,
  TelegramIcon,
  FacebookIcon,
  MediumIcon,
  TwitterIcon,
  GithubIcon,
} from '../src';
import {
  LinkComponent,
  SocialMediaComponent,
  StoreBadgeComponent,
  defaultArgs,
} from './utils/footer';
import { ThemeKnob } from './theme_knob';

export default {
  title: 'Footer',
  component: Footer,
  decorators: [withKnobs],
  argTypes: defaultArgs,
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
  bigDipperLogo: {
    alt: 'big dipper logo',
  },
  donate: {
    text: 'Donate',
    url: '#',
  },
  breakpoint: 769,
  blockExplorerText: 'Cosmos Block Explorer',
  copyrightText: 'Copyright © Forbole 2020',
  links: {
    components: [
      <LinkComponent url="#" title="About Big Dipper" />,
      <LinkComponent url="#" title="FAQ" />,
      <LinkComponent url="#" title="Terms and Conditions" />,
      <LinkComponent url="#" title="Download Big Dipper Wallet" />,
    ],
    decorator: '|',
  },
  socialMediaComponents: [
    <SocialMediaComponent url="#" component={TelegramIcon} className="telegram" />,
    <SocialMediaComponent url="#" component={FacebookIcon} className="facebook" />,
    <SocialMediaComponent url="#" component={MediumIcon} className="medium" />,
    <SocialMediaComponent url="#" component={TwitterIcon} className="twitter" />,
    <SocialMediaComponent url="#" component={GithubIcon} className="github" />,
  ],
};

/**
 * Base with only necessary props
 */
export const Base = Template.bind({
});

Base.args = {
  blockExplorerText: 'Cosmos Block Explorer',
  copyrightText: 'Copyright © Forbole 2020',
};
