import React, { useState } from 'react'
import useClient from '../../hooks/useClient'
import axios from 'axios'
import { toast } from 'react-toastify'

function AddClientForm() {
  const {setShowAddForm, addClient} = useClient();
  const [client, setClient] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    billingAddress: '',
    shippingAddress: '',
    taxId: '',
    notes: '',
    status: 'Active',
  });

  const handleChange = (e) => {
    setClient({...client, [e.target.name]: e.target.value});
    console.log(client);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const token = localStorage.getItem('token');
      const headers = token ? { Authorization: token } : {};
      const res = await axios.post('/api/v1/clients/add-client', client , {
        headers
      });
      if(res.status === 200){
        toast.success('Client added successfully');
        setShowAddForm(false);
        addClient(res.data.client);
      }
      else{
        toast.error(res.data.message);
      }
      setClient({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        billingAddress: '',
        shippingAddress: '',
        taxId: '',
        notes: '',
        status: 'Active',
      })
    }
    catch(err)
    {
      toast.error(err.response.data.message); 
    }
  } 

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-6 border border-[#232a3a] w-11/12 md:w-3/4 lg:w-1/2 shadow-2xl rounded-2xl bg-[#10141c]">
        <div className="mt-3">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-white">Add New Client</h3>
            <button className="text-gray-400 hover:text-gray-300 transition-colors duration-200" onClick={() => setShowAddForm(false)}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="bg-[#1a1f2e] p-6 rounded-xl border border-[#232a3a]">
              <h4 className="text-lg font-semibold text-white mb-6">Basic Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={client.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={client.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={client.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={client.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#1a1f2e] p-6 rounded-xl border border-[#232a3a]">
              <h4 className="text-lg font-semibold text-white mb-6">Address Information</h4>
              <div className="space-y-6 ">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Billing Address *</label>
                  <textarea
                    name="billingAddress"
                    value={client.billingAddress}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter billing address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Shipping Address (Optional)</label>
                  <textarea
                    rows={3}      
                    name="shippingAddress"
                    value={client.shippingAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter shipping address"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#1a1f2e] p-6 rounded-xl border border-[#232a3a]">
              <h4 className="text-lg font-semibold text-white mb-6">Additional Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Tax ID / GST Number</label>
                  <input
                    type="text"
                    name="taxId"
                    value={client.taxId}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter tax ID"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                  <select
                    name="status"
                    value={client.status}
                    onChange={handleChange}
                   className="w-full px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                    <option value="Active">Active</option>
                    <option value="Archived">Archived</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Notes / Special Instructions</label>
                <textarea
                  rows={3}
                  name="notes"
                  value={client.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Enter any notes or special instructions"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-6 py-3 border border-[#232a3a] rounded-xl text-gray-300 hover:bg-[#1a1f2e] transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-200 font-medium shadow-lg"
              >
                Save Client
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
      
  )
}

export default AddClientForm 