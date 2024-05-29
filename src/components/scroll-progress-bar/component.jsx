import { useRef, useEffect } from 'react';

import { useScrollProgress } from '../../hooks/use-scroll-progress';

export const ScrollProgressBar = () => {
  const containerProgressBarRef = useRef();
  const { progressBarWidth } = useScrollProgress();

  useEffect(() => {
    containerProgressBarRef.current.style.width = progressBarWidth + '%';
  }, [progressBarWidth]);

  return (
    <div
      ref={containerProgressBarRef}
      style={{
        backgroundColor: 'red',
        height: 10,
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    ></div>
  );
};
