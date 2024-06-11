import { useCallback, useState } from 'react';

import { useUser } from '../../contexts/user/hooks';
import { AuthorizationForm } from '../authorization-form/component';
import { Modal } from '../modal/component';
import { StyledButton } from '../styled-button/component';

export const AuthorizationButton = () => {
  const { user, logout, login } = useUser();

  const [isVisibleAuthorizedModal, setIsVisibleAuthorizedModal] = useState(false);

  const handleClose = useCallback(() => setIsVisibleAuthorizedModal(false), []);
  const handleOpen = useCallback(() => setIsVisibleAuthorizedModal(true), []);
  const handleLogin = useCallback(
    (name) => {
      login(name);
      handleClose();
    },
    [login, handleClose],
  );

  return (
    <div>
      {isVisibleAuthorizedModal ? (
        <Modal onClose={handleClose}>
          <AuthorizationForm onCancel={handleClose} onLogin={handleLogin} />
        </Modal>
      ) : null}
      {user === '' ? (
        <StyledButton onClick={handleOpen}>Войти</StyledButton>
      ) : (
        <>
          <span>{user}</span>
          <StyledButton onClick={logout}>Выйти</StyledButton>
        </>
      )}
    </div>
  );
};
