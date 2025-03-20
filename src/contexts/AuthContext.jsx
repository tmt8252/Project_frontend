import { createContext, useContext, useState, useEffect } from "react";
import { login as loginApi, register as registerApi } from "../api/login";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        // You might want to fetch from an API or check localStorage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Authentication error:", error);
      } finally {
        setLoading(false);
      }
    };

    checkUserLoggedIn();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      // This is a placeholder for actual API authentication
      // Replace with your actual authentication logic
      const response = await loginApi(email, password);

      // Store user in state and localStorage
      setUser(response);
      localStorage.setItem("user", JSON.stringify(response));
      return true;
    } catch (error) {
      throw new Error(error);
    }
  };

  const register = async ({ username, email, password, number }) => {
    try {
      const response = await registerApi({ username, email, password, number });
    } catch (error) {
      throw new Error(error);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
