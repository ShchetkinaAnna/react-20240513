import { useState } from 'react';

import { StyledButton } from '../styled-button/component';

export const SignIn = ({ signIn, cancel }) => {
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
      <StyledButton
        disabled={userName === ''}
        onClick={() => {
          signIn(userName);
          cancel();
        }}
      >
        Войти
      </StyledButton>
      <StyledButton onClick={cancel}>Отмена</StyledButton>
    </div>
  );
};
