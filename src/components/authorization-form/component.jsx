import { useCallback, useState } from 'react';

import { StyledButton } from '../styled-button/component';

export const AuthorizationForm = ({ onLogin, onCancel }) => {
  const [userName, setUserName] = useState('');

  const handleLogin = useCallback(() => onLogin(userName), [userName, onLogin]);

  return (
    <div>
      <input
        type="text"
        size="40"
        value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <StyledButton disabled={userName === ''} onClick={handleLogin}>
        Войти
      </StyledButton>
      <StyledButton onClick={onCancel}>Отмена</StyledButton>
    </div>
  );
};
