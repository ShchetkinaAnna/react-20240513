import { useContext, useState } from 'react';

import { UserContext } from '../../contexts/user';
import { Modal } from '../modal/component';
import { SignIn } from '../sign-in/component';
import { StyledButton } from '../styled-button/component';

export const AuthorizationButton = ({ setUser }) => {
  const user = useContext(UserContext);
  const isAuthorized = user !== '';

  const [isVisibleAuthorizedModal, setIsVisibleAuthorizedModal] = useState(false);

  return (
    <div>
      {isVisibleAuthorizedModal ? (
        <Modal>
          <SignIn signIn={setUser} cancel={() => setIsVisibleAuthorizedModal(false)} />
        </Modal>
      ) : null}
      {!isAuthorized ? (
        <StyledButton
          style={{ height: '30px' }}
          onClick={() => {
            setIsVisibleAuthorizedModal(true);
          }}
        >
          Войти
        </StyledButton>
      ) : (
        <>
          <span>{user}</span>
          <StyledButton style={{ height: '30px' }} onClick={() => setUser('')}>
            Выйти
          </StyledButton>
        </>
      )}
    </div>
  );
};
