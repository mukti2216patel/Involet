import Login from './auth/Login'
import Register from './auth/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Maincomp/Dashboard'
import './App.css'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/UserContext'
import ProtectedRoute from './auth/ProtectedRoute'
import Invoices from './Maincomp/Invoices'
import Clients from './Maincomp/Clients'
import Settings from './Maincomp/Settings'
import Profile from './Maincomp/Profile'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/invoices' element={<Invoices />} />
            <Route path='/dashboard/clients' element={<Clients />} />
            <Route path='/dashboard/settings' element={<Settings />} /> 
            <Route path='/dashboard/profile' element={<Profile />} /> 
          </Route>
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </AuthProvider>
  )
}

export default App
