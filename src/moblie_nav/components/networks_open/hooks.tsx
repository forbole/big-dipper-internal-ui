import {
  useEffect, useState,
} from 'react';

export const useNetworksOpenHook = ({ isNetworkOpen = false }) => {
  const [value, setValue] = useState(isNetworkOpen);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (value !== isNetworkOpen) {
      setValue(isNetworkOpen);
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isNetworkOpen]);

  return {
    shouldAnimate,
  };
};
