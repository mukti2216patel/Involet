import React from 'react';
import { useNavigate } from 'react-router-dom';

const mockInvoices = [
  // {
  //   id: 'INV-001',
  //   client: 'Acme Corp',
  //   date: '2024-06-01',
  //   due: '2024-06-15',
  //   amount: '$1,200.00',
  //   status: 'Paid',
  // },
  // {
  //   id: 'INV-002',
  //   client: 'Beta LLC',
  //   date: '2024-06-05',
  //   due: '2024-06-20',
  //   amount: '$850.00',
  //   status: 'Unpaid',
  // },
  // {
  //   id: 'INV-003',
  //   client: 'Gamma Inc',
  //   date: '2024-05-28',
  //   due: '2024-06-10',
  //   amount: '$2,500.00',
  //   status: 'Overdue',
  // },
];


function Invoices() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full min-h-[80vh]">
  
      <div className="w-full flex flex-col gap-6">
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

    </div>
  );
}

export default Invoices;
