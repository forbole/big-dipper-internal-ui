import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import {
  Languages,
  ThemeMode,
  Network,
} from './components';
import { TopBarProps } from '../../types';

const TopActionBar = (props:TopBarProps) => {
  const { classes } = useGetStyles();
  const { language, themeMode } = props;
  return (
    <div className={classnames(classes.root, 'big-dipper', 'desktop-nav', 'top-action-bar')}>
      <Network />
      <ThemeMode themeMode={themeMode} />
      <Languages language={language} />
    </div>
  );
};

export default TopActionBar;
