import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { useGetHeightHook } from '../../utils/get_height_hook';
import { Placeholder } from '../..';

const MobileNav = () => {
  const {
    ref: heightRef,
    height,
  } = useGetHeightHook();
  const { classes } = useGetStyles();

  return (
    <div className={classnames('mobile-nav-wrapper')}>
      <div
        ref={heightRef}
        className={classnames(classes.root, 'big-dipper', 'mobile-nav')}
      >
        whoops
      </div>
      <Placeholder height={height} />
    </div>
  );
};

export default MobileNav;
