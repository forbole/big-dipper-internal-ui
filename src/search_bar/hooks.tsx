import { useState } from 'react';

export const useSearchBarHook = (callback:any) => {
  const [value, setValue] = useState('');
  const handleOnChange = (e:any) => {
    const newValue = e?.target?.value ?? '';
    setValue(newValue);
  };

  const handleOnSubmit = () => {
    if (callback) {
      callback(value);
    }
  };

  const handleKeyDown = (e:any) => {
    const shift = e?.shiftKey;
    const isEnter = e?.keyCode === 13 || e?.key === 'Enter';
    if (isEnter && !shift) {
      e.preventDefault();
      handleOnSubmit();
    }
  };

  return {
    handleOnChange,
    handleOnSubmit,
    value,
    handleKeyDown,
  };
};
