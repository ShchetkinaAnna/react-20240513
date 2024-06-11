import { useCallback, useState } from 'react';

import { useUser } from '../../contexts/user/hooks';

import { AuthorizationButton } from './component';

export const AuthorizationButtonContainer = () => {
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
    <AuthorizationButton
      isVisibleModal={isVisibleAuthorizedModal}
      user={user}
      login={handleLogin}
      openModal={handleOpen}
      closeModal={handleClose}
      logout={logout}
    />
  );
};
