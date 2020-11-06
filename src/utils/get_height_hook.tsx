import {
  useEffect, useState, useRef,
} from 'react';

export const useGetHeightHook = () => {
  const [height, setHeight] = useState(0);
  const ref: any = useRef(null);
  useEffect(() => {
    if (ref?.current?.clientHeight) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref?.current?.clientHeight]);

  return {
    height,
    ref,
  };
};
