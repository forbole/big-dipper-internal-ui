import React from 'react';
import classnames from 'classnames';
import {
  Nav,
  NavOpen,
  NetworksOpen,
  SearchBar,
  Placeholder,
  Announcement,
} from './components';
import { MobileProps } from './types';
import { useGetHeightHook } from './hooks';
import { useGetStyles } from './styles';
import { formatProps } from './utils';

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
        <NavOpen {...formattedProps} />
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
      {/* wingman remove */}
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a neque metus. Duis vehicula erat eget fringilla ornare. Nulla gravida rutrum quam, non cursus mi sagittis ut. Cras a cursus enim. Cras vehicula sapien a metus euismod, ac maximus sem congue. Nulla interdum enim mauris, at placerat velit volutpat non. Integer bibendum tincidunt enim vitae ultrices. Phasellus rhoncus erat a blandit egestas. Etiam euismod, ipsum semper scelerisque luctus, lorem mi tempor nisl, nec euismod turpis lectus eget tellus. Nunc sed lorem orci. Quisque a lectus quis massa euismod consectetur tristique sit amet purus. Donec dapibus placerat nunc, vel tristique ex imperdiet euismod. Integer a nisl eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

        Integer in malesuada dolor. Vestibulum dapibus libero metus, eu scelerisque libero ultricies at. Ut commodo, nisl sit amet iaculis sodales, ligula nisi fermentum odio, nec interdum diam nisl quis arcu. Nulla porta ipsum quis ipsum mollis suscipit. Morbi ultrices fermentum lorem vel aliquet. Nam fermentum dui nulla, sed interdum augue feugiat at. Proin et felis congue, facilisis libero et, rutrum lorem. Fusce feugiat ex vel lectus tristique mattis. Fusce a diam aliquet, dapibus est pulvinar, lacinia magna. Phasellus gravida mi lectus, ac volutpat felis euismod ut. Maecenas tincidunt suscipit diam a sodales. Vestibulum rhoncus leo id libero vulputate, pretium euismod ex egestas. Nulla vitae ultrices velit, scelerisque laoreet odio.
      </div>
    </>
  );
};

export default MobileNav;
