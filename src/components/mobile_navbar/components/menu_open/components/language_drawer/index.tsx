import React from 'react';
import classnames from 'classnames';
import { Drawer } from '@material-ui/core';
import { LanguageDrawerProps } from './types';
import { useGetStyles } from './styles';
import { useLanguageDrawerHook } from './hooks';

const LanguageDrawer = (props:LanguageDrawerProps) => {
  const { classes } = useGetStyles();
  const {
    toggleDrawer,
    drawerOpen,
    selected,
    languages,
    onClick,
  } = props;
  const { handleChange } = useLanguageDrawerHook(onClick, toggleDrawer);
  return (
    <Drawer
      anchor="bottom"
      open={drawerOpen}
      onClose={toggleDrawer}
      className={classnames(classes.root, 'language-drawer')}
    >
      <div className={classnames('content')}>
        {languages?.map((x) => {
          return (
            <div
              role="button"
              onClick={() => handleChange({
                key: x?.key, value: x?.value,
              })}
              key={x?.key}
              className={classnames('item', {
                selected: selected?.key === x?.key,
              })}
            >
              {x?.value}
            </div>
          );
        })}
      </div>
    </Drawer>
  );
};

export default LanguageDrawer;
