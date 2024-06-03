import { createPortal } from 'react-dom';

export const Modal = ({ children }) => {
  return (
    <>
      {createPortal(
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(196, 196, 196, 0.5)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {children}
          </div>
        </div>,
        document.getElementById('modal'),
      )}
    </>
  );
};
