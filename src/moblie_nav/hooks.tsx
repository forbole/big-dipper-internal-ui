import {
  useEffect, useState, useRef,
} from 'react';

export const useGetHeightHook = () => {
  const [height, setHeight] = useState(0);
  const ref: any = useRef(null);
  useEffect(() => {
    setHeight(ref?.current?.clientHeight ?? 0);
  }, [ref]);

  return {
    height,
    ref,
  };
};
