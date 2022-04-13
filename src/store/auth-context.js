import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({
  isLoggedIn: undefined,
  logoutHandler: () => {},
});

const AuthContextProvider = (props) => {
  useEffect(() => {
    const loginInfo = localStorage.getItem("isLoggedIn");
    if (loginInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };
  const loginHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        logoutHandler: logoutHandler,
        loginHandler: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
