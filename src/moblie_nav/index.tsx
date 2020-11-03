import React from 'react';
import classnames from 'classnames';
import {
  Nav,
  MenuOpen,
  NetworksOpen,
  SearchBar,
  Announcement,
} from './components';
import { MobileProps } from './types';
import { useGetHeightHook } from '../utils/get_height_hook';
import { useGetStyles } from './styles';
import { formatProps } from './utils';
import { Placeholder } from '..';

const MobileNav = (props: MobileProps) => {
  const {
    ref: heightRef,
    height,
  } = useGetHeightHook();
  const formattedProps = formatProps(props);
  const { classes } = useGetStyles();
  const { searchBar, announcement } = formattedProps;
  return (
    <>
      <div
        ref={heightRef}
        className={classnames(classes.root, 'big-dipper', 'mobile-nav')}
      >
        <MenuOpen {...formattedProps} />
        <NetworksOpen {...formattedProps} />
        <Nav {...formattedProps} />
        {!!searchBar && (
          <SearchBar {...formattedProps} />
        )}
        {!!announcement && (
          <Announcement announcement={announcement} />
        )}
      </div>
      <Placeholder height={height} />
    </>
  );
};

export default MobileNav;
