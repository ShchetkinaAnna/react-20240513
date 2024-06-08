import { useRef, useEffect } from 'react';

import { useScrollProgress } from '../../hooks/use-scroll-progress';

import styles from './styles.module.css';

export const ScrollProgressBar = () => {
  const containerProgressBarRef = useRef();
  const { progressBarWidth } = useScrollProgress();

  useEffect(() => {
    containerProgressBarRef.current.style.width = progressBarWidth + '%';
  }, [progressBarWidth]);

  return <div ref={containerProgressBarRef} className={styles.progressbar}></div>;
};
