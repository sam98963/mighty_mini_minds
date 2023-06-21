import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
});

export function AuthProvider({children}) {
    const [isAuthenticated, setAuthenticated] = useState(true);

    return(
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);