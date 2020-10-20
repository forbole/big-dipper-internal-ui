import React from 'react';
import classnames from 'classnames';
import {
  InputBase, InputAdornment,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useDebounceHook } from '../../../utils/debounce';
import { useGetStyles } from './styles';
import { SearchBarProps } from './types';
import { useSearchBarHook } from './hooks';

const SearchBar = (props: SearchBarProps) => {
  const { classes } = useGetStyles();
  const { searchBarPlaceholder, searchBarCallback: callback } = props;
  const { handleOnChange, value } = useSearchBarHook();
  useDebounceHook({
    value,
    delay: 500,
    callback,
  });
  return (
    <form className={classnames(classes.root, 'big-dipper', 'search-input')}>
      <InputBase
        className={classnames('input')}
        placeholder={searchBarPlaceholder}
        onChange={handleOnChange}
        value={value}
        inputProps={{
          'aria-label': 'search by block height, address, tx hash',
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
