import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post('api/v1/auth/login', { email, password });
     
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        toast.success('Login successful');
        navigate('/dashboard');
      }
      else {
        toast.error(res.data.message);
      }
      setEmail('');
      setPassword('');
    }
    catch (e) {
      console.log(e)
      toast.error('Invalid credentials');
    }
  }
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-white font-bold text-4xl mb-10 tracking-wide drop-shadow-lg">
        Welcome to <span className="text-blue-400">Involet</span>
      </h1>
      {/*
      <div className="text-gray-400 text-lg italic mb-8 text-center max-w-md drop-shadow">
        "Empowering your invoices, empowering your business."
      </div>
      */}
      <form className="bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 px-8 py-10 w-full max-w-sm flex flex-col gap-6" onSubmit={handleLogin}>
        <h2 className="text-white text-center m-0 font-semibold tracking-wide text-2xl">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 rounded-lg border border-gray-800 bg-gray-900/80 text-white text-base outline-none transition focus:border-blue-400 shadow"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-3 rounded-lg border border-gray-800 bg-gray-900/80 text-white text-base outline-none transition focus:border-blue-400 shadow"
        />
        <button
          type="submit"
          className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-lg cursor-pointer shadow hover:from-blue-600 hover:to-cyan-500 transition"
        >
          Login
        </button>
        <div className="text-gray-400 text-center mt-2 text-base"
          onClick={() => navigate('/register')}
        >

          Don't have an account?
        </div>
      </form>
    </div>
  );
}

export default Login; 