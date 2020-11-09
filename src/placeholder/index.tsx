import React from 'react';
import classnames from 'classnames';
import { PlaceholderProps } from './types';
import { useGetStyles } from './styles';

const Placeholder = (props: PlaceholderProps) => {
  const { height } = props;
  const { classes } = useGetStyles(height);
  return (
    <div className={classnames(classes.root, 'big-dipper', 'placeholder')} />
  );
};

export default Placeholder;
