import React from 'react';
import classnames from 'classnames';
import { NavOpenProps } from './types';
import { useGetStyles } from './styles';
import { useNavOpenHook } from './hooks';

const NavOpen = (props: NavOpenProps) => {
  const { classes } = useGetStyles();
  const { isOpen = false } = props;
  const { shouldAnimate } = useNavOpenHook({
    isOpen,
  });
  console.log(shouldAnimate, 'should i animate');
  return (
    <div
      className={classnames(classes.root, 'big-dipper', 'mobile-nav-open', {
        open: isOpen && shouldAnimate,
        close: !isOpen && shouldAnimate,
      })}
    >
      nav open
    </div>
  );
};

export default NavOpen;
