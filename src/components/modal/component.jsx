import { createPortal } from 'react-dom';

import styles from './styles.module.css';

export const Modal = ({ children, onClose }) => {
  return createPortal(
    <>
      <div className={styles.modal} onClick={onClose}></div>
      <div className={styles.modal__window}>
        <button onClick={onClose} className={styles.modal__closeimage}>
          X
        </button>
        {children}
      </div>
    </>,
    document.getElementById('modal'),
  );
};
