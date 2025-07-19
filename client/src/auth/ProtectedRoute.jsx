import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

const ProtectedRoute = () => {
  const { token, loading } = useUser();

  if (loading) {
    return <div className="centered-screen">Loading...</div>;
  }
  
  if (!token) {
    return <Navigate to="/" />;
  }
  
  return <Outlet />;
};

export default ProtectedRoute;
