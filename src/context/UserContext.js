import { createContext, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
