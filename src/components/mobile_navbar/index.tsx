import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { useGetHeightHook } from '../../utils/get_height_hook';
import { Placeholder } from '../..';
import { formatProps } from './utils';
import { MobileProps } from './types';
import {
  MenuOpen, Nav,
} from './components';

const MobileNav = (props: MobileProps) => {
  const {
    ref: heightRef,
    height,
  } = useGetHeightHook();
  const { classes } = useGetStyles();
  const formattedProps = formatProps(props);
  const { className } = formattedProps;

  return (
    <div className={classnames(className, 'mobile-nav-wrapper')}>
      <div
        ref={heightRef}
        className={classnames(classes.root, 'big-dipper', 'mobile-nav')}
      >
        <MenuOpen {...formattedProps} />
        {/* <NetworksOpen {...formattedProps} /> */}
        <Nav {...formattedProps} />
        {/* {!!searchBar && (
          <SearchBar {...formattedProps} />
        )} */}
        {/* {!!announcement && (
          <Announcement announcement={announcement} />
        )} */}
      </div>
      <Placeholder height={height} />
    </div>
  );
};

export default MobileNav;
