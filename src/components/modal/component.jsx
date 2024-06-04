import { createPortal } from 'react-dom';

export const Modal = ({ children, onClose }) => {
  return createPortal(
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(196, 196, 196, 0.5)',
        }}
        onClick={onClose}
      ></div>
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div style={{ textAlign: 'right' }}>
          <button onClick={onClose}>X</button>
        </div>
        {children}
      </div>
    </>,
    document.getElementById('modal'),
  );
};
