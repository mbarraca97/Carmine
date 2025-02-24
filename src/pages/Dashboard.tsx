import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const { signOut } = useAuth();

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      
      <button onClick={signOut}>Logout</button>
    </div>
  );
};

export default Dashboard;
