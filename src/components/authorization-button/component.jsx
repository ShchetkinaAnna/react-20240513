import { useContext } from 'react';

import { UserContext } from '../../contexts/user';
import { StyledButton } from '../styled-button/component';

export const AuthorizationButton = ({ signInUser, signOutUser }) => {
  const user = useContext(UserContext);
  const isAuthorized = user !== '';

  return (
    <div>
      {!isAuthorized ? (
        <StyledButton style={{ height: '30px' }} onClick={signInUser}>
          Войти
        </StyledButton>
      ) : (
        <>
          <span>{user}</span>
          <StyledButton style={{ height: '30px' }} onClick={signOutUser}>
            Выйти
          </StyledButton>
        </>
      )}
    </div>
  );
};
