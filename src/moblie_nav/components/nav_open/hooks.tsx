import {
  useEffect, useState,
} from 'react';

export const useNavOpenHook = ({ isNavOpen = false }) => {
  const [value, setValue] = useState(isNavOpen);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (value !== isNavOpen) {
      setValue(isNavOpen);
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isNavOpen, setValue, setShouldAnimate]);

  return {
    shouldAnimate,
  };
};
