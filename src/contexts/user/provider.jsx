import { useMemo, useState } from 'react';

import { UserContext } from './context';

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const contextValue = useMemo(() => ({ user, login: setUser, logout: () => setUser('') }), [user]);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
