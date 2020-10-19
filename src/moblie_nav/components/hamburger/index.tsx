import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { HamburgerProps } from './types';

const Hamburger = (props: HamburgerProps) => {
  const { classes } = useGetStyles();
  const {
    isOpen,
    toggleIsOpen,
  } = props;
  console.log(isOpen, 'hamburger is open');
  return (
    <div
      role="button"
      onClick={toggleIsOpen}
      className={classnames(classes.root, 'big-dipper', 'hamburger', {
        active: isOpen,
      })}
    >
      <div className={classnames('hamburger-content')} />
    </div>
  );
};

export default Hamburger;
