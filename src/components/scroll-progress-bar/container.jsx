import { useRef, useEffect } from 'react';

import { useScrollProgress } from '../../hooks/use-scroll-progress';

import { ScrollProgressBar } from './component';

export const ScrollProgressBarContainer = () => {
  const containerProgressBarRef = useRef();
  const { progressBarWidth } = useScrollProgress();

  useEffect(() => {
    containerProgressBarRef.current.style.width = progressBarWidth + '%';
  }, [progressBarWidth]);

  return <ScrollProgressBar containerRef={containerProgressBarRef} />;
};
