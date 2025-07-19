import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const navLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7m-9 2v8a2 2 0 002 2h4a2 2 0 002-2v-8m-6 0h6" /></svg>
    ),
  },
  {
    name: "Invoices",
    path: "/dashboard/invoices",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2m-6 0h6" /></svg>
    ),
  },
  {
    name: "Clients",
    path: "/dashboard/clients",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5a4 4 0 11-8 0 4 4 0 018 0zm6 8v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a6 6 0 0112 0z" /></svg>
    ),
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
    ),
  },
  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    ),
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useUser();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  }
  return (
    <aside className="h-[95vh] w-64 bg-[#10141c] border border-[#232a3a] shadow-2xl rounded-2xl flex flex-col justify-between p-6 m-4 mx-2 font-sans">
      <div>
        <div className="flex items-center gap-3 mb-12">
          <span className="text-3xl font-extrabold text-white drop-shadow-lg tracking-tight">Involet</span>
          <span className="text-blue-400 text-2xl font-bold">•</span>
        </div>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`w-full flex items-center px-4 py-3 rounded-xl font-medium text-base transition-all duration-200 shadow border border-transparent gap-2
                ${location.pathname === link.path
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-blue-400 shadow-lg scale-[1.03]"
                  : "text-gray-300 hover:bg-[#232a3a] hover:text-blue-300 hover:border-blue-400/40"}
              `}
            >
              {link.icon}
              {link.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-10 flex flex-col items-center gap-3">
        {user?.picture ? (
          <img 
            src={user.picture} 
            alt={user.name} 
            className="w-14 h-14 rounded-full border-4 border-[#232a3a] shadow-lg object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-[#232a3a]">
            {user?.name?.charAt(0)?.toUpperCase() || 'U'}
          </div>
        )}
        <div className="text-white font-semibold text-lg tracking-wide">
          {user?.name || 'Username'}
        </div>
        <div className="text-gray-400 text-sm">
          {user?.email || 'user@example.com'}
        </div>
        <button className="mt-2 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-base shadow hover:from-blue-600 hover:to-cyan-500 transition-all duration-200"
        onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
