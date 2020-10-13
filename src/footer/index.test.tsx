import React from 'react';
import { mount } from 'enzyme';
import {
  Button,
  ListItem,
} from '@material-ui/core';
import Footer from '.';

describe('Footer', () => {
  it('Works with base props', () => {
    expect(Footer).toBeTruthy();
    const wrap = mount(
      <Footer
        blockExplorerText="Cosmos Block Explorer"
        copyrightText="Copyright © Forbole 2020"
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(Button)).toHaveLength(0);
    expect(wrap.find(ListItem)).toHaveLength(0);
    expect(wrap.find('.block-explorer-text').first().text()).toEqual('Cosmos Block Explorer');
  });

  it('Works with all props', () => {
    expect(Footer).toBeTruthy();
    const wrap = mount(
      <Footer
        bigDipperLogo={{
          alt: 'big dipper logo',
          src: './src/resources/images/big-dipper-logo.png',
        }}
        blockExplorerText="Forbole Block Explorer"
        breakpoint={769}
        copyrightText="Copyright © Forbole 2020"
        donate={{
          text: 'Donate',
          url: '#',
        }}
        links={{
          components: [
            <h1>link 1</h1>,
            <h1>link 2</h1>,
          ],
          decorator: '|',
        }}
        socialMediaComponents={[
          <div>media 1</div>,
        ]}
        storeBadgesComponents={[
          <div>apple</div>,
        ]}
      />,
    );

    expect(wrap).not.toBeNull();
    expect(wrap.find(Button)).toHaveLength(2);
    expect(wrap.find(ListItem)).toHaveLength(2);
    expect(wrap.find('.block-explorer-text').first().text()).toEqual('Forbole Block Explorer');
    expect(wrap.find(ListItem).first().text()).toEqual('link 1|');
  });
});
