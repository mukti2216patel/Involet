import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async(e)=>{   
        e.preventDefault();
        try{
            const res = await axios.post('api/v1/auth/register' , {name , email , password});
            if (res.status === 200) {
              toast.success('Register successful');
              setTimeout(() => navigate('/login'), 1000);
            }
            else{
                toast.error('Register failed');
            }
            setName('');
            setEmail('');
            setPassword('');
        }
        catch(e){
            console.log('catch block hit', e);
            toast.error('Register failed');
        }
    }
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-white font-bold text-3xl mb-4 tracking-wide drop-shadow-lg">
        Create your <span className="text-blue-400">Involet</span> account
      </h1>
      <div className="text-gray-400 text-lg italic mb-10 text-center max-w-md drop-shadow">
        "Start your journey to effortless invoicing."
      </div>
      <form className="bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 px-8 py-10 w-full max-w-sm flex flex-col gap-6" onSubmit={handleRegister}>
        <h2 className="text-white text-center m-0 font-semibold tracking-wide text-2xl">Register</h2>
        <input
          type="text"
          placeholder="Name"
          required
          className="p-3 rounded-lg border border-gray-800 bg-gray-900/80 text-white text-base outline-none transition focus:border-blue-400 shadow"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="p-3 rounded-lg border border-gray-800 bg-gray-900/80 text-white text-base outline-none transition focus:border-blue-400 shadow"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-3 rounded-lg border border-gray-800 bg-gray-900/80 text-white text-base outline-none transition focus:border-blue-400 shadow"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
         
          type="submit"
          className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-lg cursor-pointer shadow hover:from-blue-600 hover:to-cyan-500 transition"
        >
          Register
        </button>

      </form>
    <button className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-lg cursor-pointer shadow hover:from-blue-600 hover:to-cyan-500 transition"
 onClick={()=> toast.success('Home')}>Home</button>
    </div>
  );
}

export default Register; 