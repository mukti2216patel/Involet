import React, { useContext, useState } from 'react';
import ClientContext from '../context/ClientContext';


function AddInvoice() {
  const { clients, selectedClientId, setSelectedClientId } = useContext(ClientContext);

  const selectedClient = clients.find(c => c.id === selectedClientId) || {};

  const [businessDetails, setBusinessDetails] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',  
  });

  const handleBusinessDetailsChange = (e) => {
    const { name, value } = e.target;
    setBusinessDetails({ ...businessDetails, [name]: value });
  };

  const handleClientChange = (e) => {
    const clientId = e.target.value;
    const client = clients.find(c => c.id === clientId);
    if (client) setSelectedClientId(client.id);
  };




  return (
    <div className="w-full min-h-[80vh] p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-[#181e2a] border border-[#232a3a] rounded-2xl shadow-xl p-8 flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-white mb-2">Create New Invoice</h1>
        <form className="flex flex-col gap-8">
          <div>
            <h2 className="text-lg font-bold text-blue-400 mb-2">From (Your Business)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name='name' value={businessDetails.name} onChange={handleBusinessDetailsChange} className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" placeholder="Company Name" />
              <input type="text" name='address' value={businessDetails.address} onChange={handleBusinessDetailsChange} className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" placeholder="Address" />
              <input type="email" name='email' value={businessDetails.email} onChange={handleBusinessDetailsChange} className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" placeholder="Email" />
              <input type="text" name='phone' value={businessDetails.phone} onChange={handleBusinessDetailsChange} className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" placeholder="Phone" />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-blue-400 mb-2">To (Client)</h2>
            <div className="mb-2">
              <label className="block text-gray-300 font-medium mb-1">Select Client</label>
              <select value={selectedClientId || ""} onChange={handleClientChange} className="w-full px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]">
                {clients.length === 0 ? (
                  <option disabled>No clients found</option>
                ) : (
                  clients.map(client => (
                    <option key={client.id} value={client.id}>
                      {client.name} ({client.company}) {client.address} {client.email} {client.phone}
                    </option>
                  ))
                )}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name='name' value={selectedClient.name || ""} className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" placeholder="Client Name" readOnly />
              <input type="text" name='company' value={selectedClient.company || ""} className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" placeholder="Company" readOnly />
              <input type="text" name='address' value={selectedClient.address || ""} className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" placeholder="Address" readOnly />
              <input type="email" name='email' value={selectedClient.email || ""} className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" placeholder="Email" readOnly />
              <input type="text" name='phone' value={selectedClient.phone || ""} className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" placeholder="Phone" readOnly />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" placeholder="Invoice Number" value="INV-001" readOnly />
            <input type="date" className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" value="2024-06-01" readOnly />
            <input type="date" className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" value="2024-06-15" readOnly />
            <select className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]">
              <option>Paid</option>
              <option>Unpaid</option>
              <option>Overdue</option>
            </select>
          </div>
          <div>
            <h2 className="text-lg font-bold text-blue-400 mb-2">Invoice Items</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left border border-[#232a3a] rounded-xl overflow-hidden">
                <thead className="bg-[#10141c] text-white">
                  <tr>
                    <th className="px-4 py-2">Description</th>
                    <th className="px-4 py-2">Qty</th>
                    <th className="px-4 py-2">Unit Price</th>
                    <th className="px-4 py-2">Total</th>
                  </tr>
                </thead>
                <tbody className="bg-[#181e2a]">
                  <tr>
                    <td className="px-4 py-2"><input type="text" className="w-full bg-[#10141c] text-white rounded-lg px-2 py-1 border border-[#232a3a]" value="Web Design Services" readOnly /></td>
                    <td className="px-4 py-2"><input type="number" className="w-full bg-[#10141c] text-white rounded-lg px-2 py-1 border border-[#232a3a]" value="1" readOnly /></td>
                    <td className="px-4 py-2"><input type="number" className="w-full bg-[#10141c] text-white rounded-lg px-2 py-1 border border-[#232a3a]" value="1000" readOnly /></td>
                    <td className="px-4 py-2 text-white">$1000.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2"><input type="text" className="w-full bg-[#10141c] text-white rounded-lg px-2 py-1 border border-[#232a3a]" value="Hosting (12 months)" readOnly /></td>
                    <td className="px-4 py-2"><input type="number" className="w-full bg-[#10141c] text-white rounded-lg px-2 py-1 border border-[#232a3a]" value="1" readOnly /></td>
                    <td className="px-4 py-2"><input type="number" className="w-full bg-[#10141c] text-white rounded-lg px-2 py-1 border border-[#232a3a]" value="120" readOnly /></td>
                    <td className="px-4 py-2 text-white">$120.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2"><input type="text" className="w-full bg-[#10141c] text-white rounded-lg px-2 py-1 border border-[#232a3a]" value="Domain Registration" readOnly /></td>
                    <td className="px-4 py-2"><input type="number" className="w-full bg-[#10141c] text-white rounded-lg px-2 py-1 border border-[#232a3a]" value="1" readOnly /></td>
                    <td className="px-4 py-2"><input type="number" className="w-full bg-[#10141c] text-white rounded-lg px-2 py-1 border border-[#232a3a]" value="80" readOnly /></td>
                    <td className="px-4 py-2 text-white">$80.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" placeholder="Subtotal" value="$1200.00" readOnly />
            <input type="text" className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" placeholder="Tax" value="$120.00" readOnly />
            <input type="text" className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" placeholder="Discount" value="$0.00" readOnly />
            <input type="text" className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a] font-bold text-lg" placeholder="Total" value="$1320.00" readOnly />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <textarea className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" placeholder="Notes" value="Thank you for your business! Payment is due within 14 days." rows={2} readOnly />
            <textarea className="px-4 py-2 rounded-lg bg-[#10141c] text-white border border-[#232a3a]" placeholder="Payment Terms" value="Please make payment to the bank details provided. Late payments may incur a fee." rows={2} readOnly />
          </div>
          <button type="button" className="w-full mt-8 px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-bold shadow hover:from-blue-600 hover:to-cyan-500 transition-all duration-200">
            Invoice Design
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddInvoice; 