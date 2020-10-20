import {
  useState, useEffect, useRef,
} from 'react';

export const useAnnouncementHook = () => {
  const [width, setWidth] = useState(0);
  const [animationMargin, setMargin] = useState(0);
  const ref: any = useRef(null);
  useEffect(() => {
    setWidth(ref?.current?.offsetWidth ?? 0);
  }, [ref]);

  /**
   * Helper function to handle the animation load
   */
  const handleAnimation = () => {
    if (animationMargin === 0) {
      setMargin(100);
    }
  };

  return {
    width,
    ref,
    handleAnimation,
    animationMargin,
  };
};
