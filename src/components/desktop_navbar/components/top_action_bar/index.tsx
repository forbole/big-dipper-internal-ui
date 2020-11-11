import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import {
  Languages,
  ThemeMode,
  Network,
} from './components';
import { TopBarProps } from '../../types';
import { SearchBar } from '../../../..';

const TopActionBar = (props:TopBarProps) => {
  const { classes } = useGetStyles();
  const {
    language,
    themeMode,
    searchBar,
    network,
  } = props;

  return (
    <div className={classnames(classes.root, 'big-dipper', 'desktop-nav', 'top-action-bar')}>
      {searchBar && <SearchBar searchBar={searchBar} />}
      <div className={classnames('side-actions-container')}>
        <Network network={network} />
        <ThemeMode themeMode={themeMode} />
        <Languages language={language} />
      </div>
    </div>
  );
};

export default TopActionBar;
