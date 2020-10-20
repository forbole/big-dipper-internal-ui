import {
  useState, useEffect, useRef,
} from 'react';

export const useAnnouncementHook = () => {
  const [width, setWidth] = useState(0);
  const ref: any = useRef(null);
  useEffect(() => {
    setWidth(ref?.current?.offsetWidth ?? 0);
  }, [ref]);

  return {
    width,
    ref,
  };
};
