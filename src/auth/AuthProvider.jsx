import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
});

export function AuthProvider({children}) {
    const decodedToken = JSON.parse(localStorage.getItem("tokenData"));
    
    const [isAuthenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        if (decodedToken !== null) {
          setAuthenticated(true);
        }
        if (isAuthenticated === null) {
            setAuthenticated(false);
        }
      }, [decodedToken]);

      console.log(isAuthenticated);

    return(
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);