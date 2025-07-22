import React from 'react';
import { useNavigate } from 'react-router-dom';

const mockInvoices = [
  {
    id: 'INV-001',
    client: 'Acme Corp',
    date: '2024-06-01',
    due: '2024-06-15',
    amount: '$1,200.00',
    status: 'Paid',
  },
  {
    id: 'INV-002',
    client: 'Beta LLC',
    date: '2024-06-05',
    due: '2024-06-20',
    amount: '$850.00',
    status: 'Unpaid',
  },
  {
    id: 'INV-003',
    client: 'Gamma Inc',
    date: '2024-05-28',
    due: '2024-06-10',
    amount: '$2,500.00',
    status: 'Overdue',
  },
];

const fontOptions = [
  'Inter',
  'Roboto',
  'Montserrat',
  'Lato',
  'Poppins',
];

const logoOptions = [
  '/vite.svg', // Example static logos from public folder
  '/src/assets/react.svg',
  'https://ui-avatars.com/api/?name=Involet&background=3b82f6&color=fff&size=128',
];

function Invoices() {
  const navigate = useNavigate();
  // Static selections for preview
  const selectedColor = '#3b82f6';
  const selectedFont = 'Inter';
  const selectedLogo = logoOptions[0];

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full min-h-[80vh]">
      {/* Left: Invoice Cards List */}
      <div className="md:w-2/3 w-full flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold text-white">Invoices</h1>
            <p className="mt-2 text-gray-400">Manage and design your invoices with a modern look</p>
          </div>
          <button className="px-5 py-3 bg-gradient-to-r from-green-500 to-emerald-400 text-white rounded-xl hover:from-green-600 hover:to-emerald-500 transition-all duration-200 font-medium shadow-lg"
            onClick={() => navigate('/dashboard/invoices/new')}
          >
            + Add New Invoice
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockInvoices.map((inv) => (
            <div key={inv.id} className="bg-[#181e2a] border border-[#232a3a] rounded-2xl shadow-xl p-6 flex flex-col gap-3 hover:scale-[1.03] transition-transform duration-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-white">{inv.id}</span>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full border 
                  ${inv.status === 'Paid' ? 'bg-green-500/20 text-green-400 border-green-500/30' : ''}
                  ${inv.status === 'Unpaid' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : ''}
                  ${inv.status === 'Overdue' ? 'bg-red-500/20 text-red-400 border-red-500/30' : ''}
                `}>{inv.status}</span>
              </div>
              <div className="text-gray-300 text-base font-medium">{inv.client}</div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Issue: {inv.date}</span>
                <span>Due: {inv.due}</span>
              </div>
              <div className="text-2xl font-bold text-blue-400 mt-2">{inv.amount}</div>
              <div className="flex gap-3 mt-4">
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-medium shadow hover:from-blue-600 hover:to-cyan-500 transition-all duration-200">View</button>
                <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-400 text-white rounded-lg font-medium shadow hover:from-red-600 hover:to-pink-500 transition-all duration-200">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Invoice Design Panel */}
      <div className="md:w-1/3 w-full bg-[#10141c] border border-[#232a3a] rounded-2xl shadow-2xl p-6 flex flex-col gap-6 h-fit">
        <h2 className="text-xl font-bold text-white mb-2">Invoice Design</h2>
        {/* Color Picker (static) */}
        <div>
          <label className="block text-gray-300 font-medium mb-1">Primary Color</label>
          <div className="flex items-center gap-4">
            <input type="color" className="w-12 h-12 p-0 border-none bg-transparent cursor-pointer" value={selectedColor} readOnly />
            <span className="text-gray-400">{selectedColor}</span>
          </div>
        </div>
        {/* Font Picker (static) */}
        <div>
          <label className="block text-gray-300 font-medium mb-1">Font Family</label>
          <select className="w-full px-4 py-2 rounded-lg bg-[#181e2a] text-white border border-[#232a3a] focus:ring-2 focus:ring-blue-500" value={selectedFont} readOnly>
            {fontOptions.map(font => (
              <option key={font} value={font} style={{ fontFamily: font }}>{font}</option>
            ))}
          </select>
        </div>
        {/* Logo Picker (static) */}
        <div>
          <label className="block text-gray-300 font-medium mb-1">Logo</label>
          <div className="flex gap-3 items-center">
            {logoOptions.map((logo, idx) => (
              <div key={logo} className={`w-12 h-12 rounded-full border-2 ${selectedLogo === logo ? 'border-blue-400' : 'border-[#232a3a]'} flex items-center justify-center bg-white overflow-hidden`}>
                <img src={logo} alt={`Logo ${idx+1}`} className="w-10 h-10 object-contain" />
              </div>
            ))}
          </div>
        </div>
        {/* Download PDF Button (static) */}
        <button className="w-full mt-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-bold shadow hover:from-blue-600 hover:to-cyan-500 transition-all duration-200">
          Download PDF
        </button>
        {/* Live Preview (format/layout is fixed, only color/font/logo change) */}
        <div className="bg-white rounded-xl p-8 shadow-lg mt-4 border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <div className="text-3xl font-extrabold tracking-tight" style={{ fontFamily: selectedFont, color: selectedColor }}>INVOICE</div>
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-200 overflow-hidden">
              <img src={selectedLogo} alt="Logo" className="w-12 h-12 object-contain" />
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <div>
              <div className="text-lg font-bold text-gray-800" style={{ fontFamily: selectedFont }}>Acme Corp</div>
              <div className="text-gray-500 text-sm">Issue: 2024-06-01</div>
              <div className="text-gray-500 text-sm">Due: 2024-06-15</div>
            </div>
            <div className="text-right">
              <div className="text-gray-700 text-base" style={{ fontFamily: selectedFont }}>Invoice #: INV-001</div>
              <div className="text-gray-700 text-base" style={{ fontFamily: selectedFont }}>Status: <span className="font-bold text-green-500">Paid</span></div>
            </div>
          </div>
          <div className="border-t border-gray-200 my-4"></div>
          <div className="flex justify-between items-center mb-2">
            <div className="text-gray-700 text-lg" style={{ fontFamily: selectedFont }}>Billed To:</div>
            <div className="text-gray-700 text-lg font-bold" style={{ fontFamily: selectedFont }}>John Doe</div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-700 text-lg" style={{ fontFamily: selectedFont }}>Amount</div>
            <div className="text-3xl font-extrabold" style={{ color: selectedColor, fontFamily: selectedFont }}>$1,200.00</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-gray-500 text-sm">Thank you for your business!</div>
            <div className="text-gray-400 text-xs">Powered by Involet</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoices;
