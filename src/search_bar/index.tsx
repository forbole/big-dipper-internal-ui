import React from 'react';
import classnames from 'classnames';
import {
  InputBase, InputAdornment,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useGetStyles } from './styles';
import { SearchBarProps } from './types';
import { useSearchBarHook } from './hooks';

const SearchBar = (props: SearchBarProps) => {
  const { classes } = useGetStyles();
  const { searchBar: { searchBarPlaceholder, searchBarCallback: callback } } = props;
  const {
    handleOnChange,
    value,
    handleOnSubmit,
    handleKeyDown,
  } = useSearchBarHook(callback);

  return (
    <form
      className={classnames(classes.root, 'big-dipper', 'search-input')}
      onSubmit={handleOnSubmit}
    >
      <InputBase
        className={classnames('input')}
        placeholder={searchBarPlaceholder}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        value={value}
        inputProps={{
          'aria-label': searchBarPlaceholder,
        }}
        startAdornment={(
          <InputAdornment position="start">
            <Search fontSize="small" className={classnames(classes.icon, 'icon')} />
          </InputAdornment>
        )}
      />
    </form>
  );
};

export default SearchBar;
