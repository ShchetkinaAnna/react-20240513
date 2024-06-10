import { AuthorizationFormContainer } from '../authorization-form/container';
import { Modal } from '../modal/component';
import { StyledButton } from '../styled-button/component';

export const AuthorizationButton = ({
  isVisibleModal,
  user,
  login,
  openModal,
  closeModal,
  logout,
}) => {
  return (
    <div>
      {isVisibleModal ? (
        <Modal onClose={closeModal}>
          <AuthorizationFormContainer onCancel={closeModal} onLogin={login} />
        </Modal>
      ) : null}
      {user === '' ? (
        <StyledButton onClick={openModal}>Войти</StyledButton>
      ) : (
        <>
          <span>{user}</span>
          <StyledButton onClick={logout}>Выйти</StyledButton>
        </>
      )}
    </div>
  );
};
