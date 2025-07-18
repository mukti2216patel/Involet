import Login from './auth/Login'
import Register from './auth/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Maincomp/Dashboard'
import ProtectedRoute from './ProtectedRoute'
import './App.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
    <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
