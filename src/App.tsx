import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store, { RootState } from './store/store';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import RegisterPage from './pages/RegisterPage';
const App = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const state = store.getState();
  console.log('ESTADO',state );

  return (
    <Routes>
      {!token ? (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </>
      )}
    </Routes>
  );
};

export default App;
