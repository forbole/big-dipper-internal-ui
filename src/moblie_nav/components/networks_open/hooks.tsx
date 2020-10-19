import {
  useEffect, useState,
} from 'react';

export const useNetworksOpenHook = ({ isNetworkOpen = false }) => {
  const [value, setValue] = useState(isNetworkOpen);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (value !== isNetworkOpen) {
      setAnimationClass(isNetworkOpen ? 'open' : 'close');
      setValue(isNetworkOpen);
    }
  }, [isNetworkOpen, setValue, setAnimationClass]);

  return {
    animationClass,
  };
};
