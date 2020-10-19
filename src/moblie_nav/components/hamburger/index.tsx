import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';

const Hamburger = () => {
  const { classes } = useGetStyles();
  return (
    <div
      className={classnames(classes.root, 'big-dipper', 'hamburger')}
    >
      <div className={classnames('hamburger-content')} />
    </div>
  );
};

export default Hamburger;
