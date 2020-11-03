import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { Languages } from './components';
import { TopBarProps } from '../../types';

const TopActionBar = (props:TopBarProps) => {
  const { classes } = useGetStyles();
  const { language } = props;

  return (
    <div className={classnames(classes.root, 'big-dipper', 'desktop-nav', 'top-action-bar')}>
      top action bar
      <Languages language={language} />
    </div>
  );
};

export default TopActionBar;
