import { useEffect, useState } from 'react';

const calcScrolledPercent = () => {
  return (
    (document.documentElement.scrollTop /
      (document.documentElement.scrollHeight - document.documentElement.clientHeight)) *
    100
  );
};

export const useScrollProgress = () => {
  const [progressBarWidth, setProgressBarWidth] = useState(calcScrolledPercent());

  useEffect(() => {
    const scroll = () => setProgressBarWidth(calcScrolledPercent());
    document.addEventListener('scroll', scroll);

    return () => document.removeEventListener('scroll', scroll);
  }, []);

  return { progressBarWidth };
};
