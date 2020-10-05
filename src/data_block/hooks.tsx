import { useState } from 'react';
import {
  UseDataBlockHookProps, DurationCallback,
} from './types';

export const useDataBlockHook = ({ selectedValue = null }: UseDataBlockHookProps) => {
  const [selected, setSelected] = useState(selectedValue);

  const handleChange = (event: any) => {
    setSelected(event?.target?.value);
  };

  const handleCallback = (value: string | number, callback?: DurationCallback) => {
    if (callback) {
      callback(value);
    }
  };

  return {
    selected,
    handleChange,
    handleCallback,
  };
};
