import Login from './auth/Login';
import Register from './auth/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Maincomp/Dashboard';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/UserContext'; 
import { useUser } from './hooks/useUser';
import ProtectedRoute from './auth/ProtectedRoute';
import Invoices from './Maincomp/Invoices';
import Clients from './Maincomp/Clients';
import Settings from './Maincomp/Settings';
import Profile from './Maincomp/Profile';

function AppRoutes() {
  const { loading } = useUser();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-700">Loading app...</div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<div className="text-white text-2xl">Welcome to Dashboard! Navigate using the sidebar.</div>} />
          <Route path='invoices' element={<Invoices />} />
          <Route path='clients' element={<Clients />} />
          <Route path='settings' element={<Settings />} />
          <Route path='profile' element={<Profile />} />  
        </Route>
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </AuthProvider>
  );
}

export default App;
