import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { login, register, logout } from "../features/auth/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();

  const signIn = async (email: string, password: string) => {
    await dispatch(login({ email, password }));
  };

  const signUp = async (email: string, password: string) => {
    await dispatch(register({ email, password }));
  };

  const signOut = () => {
    dispatch(logout());
  };

  return { signIn, signUp, signOut };
};
