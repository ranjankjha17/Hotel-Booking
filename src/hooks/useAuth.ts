import { useApp } from '../contexts/AppContext';
import { loginUser as loginUserApi, registerUser as registerUserApi } from '../utils/auth';

export function useAuth() {
  const { currentUser, setCurrentUser } = useApp();

  const login = async (email: string, password: string) => {
    const user = await loginUserApi(email, password);
    setCurrentUser(user);
    return user;
  };

  const register = async (name: string, email: string, password: string) => {
    const user = await registerUserApi(name, email, password);
    setCurrentUser(user);
    return user;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return {
    currentUser,
    login,
    register,
    logout
  };
}