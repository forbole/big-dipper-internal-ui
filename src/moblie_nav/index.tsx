import React from 'react';
import classnames from 'classnames';
import {
  Nav,
  MenuOpen,
  NetworksOpen,
  Announcement,
} from './components';
import { MobileProps } from './types';
import { useGetHeightHook } from '../utils/get_height_hook';
import { useGetStyles } from './styles';
import { formatProps } from './utils';
import {
  Placeholder, SearchBar,
} from '..';

const MobileNav = (props: MobileProps) => {
  const {
    ref: heightRef,
    height,
  } = useGetHeightHook();
  const formattedProps = formatProps(props);
  const { classes } = useGetStyles();
  const { searchBar, announcement, className } = formattedProps;
  return (
    <div className={classnames(className, 'mobile-nav-wrapper')}>
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
    </div>
  );
};

export default MobileNav;
