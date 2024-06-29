import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: false, role: null });

  const toggleRole = () => {
    setUser(prevUser => {
      if (!prevUser.loggedIn) {
        return { loggedIn: true, role: 'consumer' }; // Default to consumer
      }

      switch (prevUser.role) {
        case 'consumer':
          return { loggedIn: true, role: 'helper' };
        case 'helper':
          return { loggedIn: true, role: null }; // Simulate role not recognized
        default:
          return { loggedIn: false, role: null }; // Logged out
      }
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, toggleRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
