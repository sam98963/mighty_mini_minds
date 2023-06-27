import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  handleAuthentication: () => {},
});

export function AuthProvider({children}) {
    const decodedToken = JSON.parse(localStorage.getItem("tokenData"));
    const [isAuthenticated, setAuthenticated] = useState(false);


  function handleAuthentication(value) {
    setAuthenticated(value);
  }

  console.log(isAuthenticated);

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
