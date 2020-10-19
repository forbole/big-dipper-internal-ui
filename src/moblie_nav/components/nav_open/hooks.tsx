import {
  useEffect, useState,
} from 'react';

export const useNavOpenHook = ({ isOpen = false }) => {
  const [value, setValue] = useState(isOpen);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (value !== isOpen) {
      setValue(isOpen);
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isOpen]);

  return {
    shouldAnimate,
  };
};
