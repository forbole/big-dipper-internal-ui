import React from 'react';
import classnames from 'classnames';
import {
  TextField, InputBase,
} from '@material-ui/core';
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
      />
    </form>
  );
};

export default SearchBar;
