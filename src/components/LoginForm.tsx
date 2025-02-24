import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { RootState, AppDispatch } from '../store/store';

const LoginForm = () => {
  const { register, handleSubmit } = useForm<{ email: string; password: string }>();
  // Type your dispatch using AppDispatch
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.auth.loading);
  const error = useSelector((state: RootState) => state.auth.error);

  const onSubmit = (data: { email: string; password: string }) => {
    dispatch(login(data));
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} placeholder="Email" required />
        <input {...register('password')} type="password" placeholder="Password" required />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
