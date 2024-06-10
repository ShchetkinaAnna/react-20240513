import styles from './styles.module.css';

export const ScrollProgressBar = ({ containerRef }) => {
  return <div ref={containerRef} className={styles.progressbar}></div>;
};
