import { useState } from 'react';

import { StyledButton } from '../styled-button/component';

export const AuthorizationForm = ({ onCancel, onLogin }) => {
  const [userName, setUserName] = useState('');

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
      <StyledButton disabled={userName === ''} onClick={() => onLogin(userName)}>
        Войти
      </StyledButton>
      <StyledButton onClick={onCancel}>Отмена</StyledButton>
    </div>
  );
};
