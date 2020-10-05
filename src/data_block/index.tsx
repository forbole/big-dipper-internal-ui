import React from 'react';
import classnames from 'classnames';
import {
  Select,
  MenuItem,
} from '@material-ui/core';
import { useGetStyles } from './styles';
import { DataBlockProps } from './types';
import { useDataBlockHook } from './hooks';

/**
 * Component used for displaying general grid data
 */
const DataBlock = (props: DataBlockProps) => {
  const { classes } = useGetStyles();
  const {
    label,
    durations = [],
    value,
    selectedValue,
    customComponent,
  } = props;

  const {
    selected,
    handleChange,
    handleCallback,
  } = useDataBlockHook({
    selectedValue,
  });

  return (
    <div className={classnames(classes.root, 'big-dipper', 'data-block')}>
      <div className={classnames('header')}>
        <p className={classnames('label')}>
          {label}
        </p>
        {durations.length > 1
          ? (
            <Select
              className={classnames(classes.select, 'select')}
              value={selected}
              onChange={handleChange}
            >
              {durations.map((x) => (
                <MenuItem
                  className={classnames('menu-item')}
                  key={x.value}
                  value={x.value}
                  onClick={() => handleCallback(x.value, x?.callback)}
                >
                  {x.display}
                </MenuItem>
              ))}
            </Select>
          )
          : (
            <p className={classnames('duration')}>
              {durations[0]?.display}
            </p>
          )}
      </div>
      <div className={classnames('content')}>
        <h1
          className={classnames('value')}
        >
          {value}
        </h1>
        {!!customComponent && (
          <span className={classnames('custom-component')}>
            {customComponent}
          </span>
        )}
      </div>
    </div>
  );
};

export default DataBlock;
