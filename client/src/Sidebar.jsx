import 'tailwindcss/tailwind.css';

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 z-100 h-screen w-56 bg-gray-950 text-white shadow-lg">
      <div className="mb-6 px-4 py-6 text-xl font-bold text-blue-400">
        Involet
      </div>
      <nav className="w-full">
        <ul className="flex flex-col gap-3 list-none p-0 m-0">
          <li className="nav-link">Dashboard</li>
          <li className="nav-link">Invoices</li>
          <li className="nav-link">Profile</li>
          <li className="nav-link text-red-500">Logout</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;