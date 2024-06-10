import { useCallback, useState } from 'react';

import { AuthorizationForm } from './component';

export const AuthorizationFormContainer = ({ onLogin, onCancel }) => {
  const [userName, setUserName] = useState('');

  const handleLogin = useCallback(() => onLogin(userName), [userName, onLogin]);

  return (
    <AuthorizationForm
      userName={userName}
      login={handleLogin}
      cancel={onCancel}
      onChange={setUserName}
    />
  );
};
