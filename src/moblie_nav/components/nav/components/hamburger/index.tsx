import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { HamburgerProps } from './types';

const Hamburger = (props: HamburgerProps) => {
  const { classes } = useGetStyles();
  const {
    hamburgerIcon: {
      isOpen,
      onClick,
    },
  } = props;

  return (
    <div
      role="button"
      onClick={onClick}
      className={classnames(classes.root, 'big-dipper', 'hamburger', {
        active: isOpen,
      })}
    >
      <div className={classnames('hamburger-content')} />
    </div>
  );
};

export default Hamburger;
