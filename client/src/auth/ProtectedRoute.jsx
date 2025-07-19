import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

const ProtectedRoute = () => {
  const { token } = useUser();
  
  if (!token) {
    return <Navigate to='/' />
  }
  
  return <Outlet />
};

export default ProtectedRoute; 