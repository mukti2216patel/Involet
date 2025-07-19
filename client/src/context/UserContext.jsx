import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isTokenExpired = (token) => {
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      const isExpired = decoded.exp < currentTime;
      return isExpired;
    } catch {
      return true;
    }
  };

  useEffect(() => {
    if (!loading && token && isTokenExpired(token)) {
      logout();
    }
  }, [token, loading]);

  useEffect(() => {
    const intialAuth = () => {
      try {
        const storeToken = localStorage.getItem('token');
        if (storeToken && !isTokenExpired(storeToken)) {
          setToken(storeToken);
          setUser(jwtDecode(storeToken));
        } else if (storeToken) {
          localStorage.removeItem('token');
          setToken(null);
          setUser(null);
        }
      } catch (err) {
        console.error('Error initializing auth:', err);
        toast.error('Error initializing auth');
      } finally {
        setLoading(false);
      }
    };
    intialAuth();
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
    setUser(jwtDecode(token));
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
