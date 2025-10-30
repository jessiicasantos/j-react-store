import { createContext, useContext, useEffect, useState } from "react";
import { UserType } from "../../types/User";

interface AuthContextType {
    user: null | UserType;
    login: (userData: null) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem("user");

        if(stored) {
            setUser(JSON.parse(stored));
        }
    }, []);

    const login = (userData: typeof user) => {
        localStorage.setItem("user", JSON.stringify(userData));

        setUser(userData);

        console.log(userData);
    };

    const logout = () => {
        localStorage.removeItem("user");

        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)!;