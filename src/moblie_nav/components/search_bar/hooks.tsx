import { useState } from 'react';

export const useSearchBarHook = () => {
  const [value, setValue] = useState('');
  const handleOnChange = (e:any) => {
    const newValue = e?.target?.value ?? '';
    setValue(newValue);
  };
  return {
    handleOnChange,
    value,
  };
};
