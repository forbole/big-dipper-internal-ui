import { Language } from '@material-ui/icons';
import React from 'react';
import classnames from 'classnames';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { LanguagesProps } from './types';
import { useLanguagesHook } from './hooks';
import { useGetStyles } from './styles';

const Languages = (props:LanguagesProps) => {
  const {
    language: {
      selected,
      onClick,
      languages,
    },
  } = props;
  const {
    anchorEl,
    handleOpen,
    handleClose,
    handleChange,
  } = useLanguagesHook(onClick);
  const { classes } = useGetStyles();
  return (
    <div className={classnames(classes.root, 'big-dipper', 'top-nav-action', 'language')}>
      <div
        onClick={handleOpen}
        role="button"
        className={classnames('selected-button')}
      >
        <Language />
        {selected.value}
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {languages.map((x) => {
          return (
            <MenuItem
              onClick={() => handleChange({
                key: x?.key, value: x?.value,
              })}
              key={x?.key}
              className={classnames('item', {
                selected: selected?.key === x?.key,
              })}
            >
              {x?.value}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default Languages;
