import React, { useEffect } from 'react'
import useClient from '../../hooks/useClient'
import axios from 'axios'
import { toast } from 'react-toastify'

function ClientList() {
  const { setShowAddForm, clients, setClients , setShowClientDetails , setSelectedClientId } = useClient();
  useEffect(() => {
    async function fetchClients() {
      try {
        const res = await axios.get('/api/v1/clients/get-clients', {
          headers: {
            Authorization: `${localStorage.getItem('token')}`
          }
        });
        if (res.status === 200) {
          setClients(res.data.clients);
        }
        else {
          toast.error(res.data.message);
        }
      }
      catch (err) {
        console.log(err);
        toast.error(err);
      }
    }
    fetchClients();
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <div className="w-full lg:w-80">
          <div className="relative">
            <input
              type="text"
              placeholder="Search clients by name, company, or email..."
              className="w-full pl-10 pr-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
            <svg className="absolute left-3 top-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 w-full lg:w-auto">
          <select className="px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
            <option>All Status</option>
            <option>Active</option>
            <option>Archived</option>
          </select>
          <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-200 font-medium shadow-lg">
            Export CSV
          </button>
          <button

            className="px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-400 text-white rounded-xl hover:from-green-600 hover:to-emerald-500 transition-all duration-200 font-medium shadow-lg"
            onClick={() => setShowAddForm(true)}
          >
            + Add New Client
          </button>
        </div>
      </div>

      <div className="bg-[#10141c] border border-[#232a3a] rounded-2xl shadow-2xl overflow-hidden w-full">
        <div className="overflow-x-auto w-full scrollbar-thin scrollbar-track-[#1a1f2e] scrollbar-thumb-[#232a3a] hover:scrollbar-thumb-[#374151]">
          <table className="min-w-full divide-y divide-[#232a3a]">
            <thead className="bg-[#1a1f2e]">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input type="checkbox" className="rounded border-[#232a3a] text-blue-500 focus:ring-blue-500 bg-[#10141c]" />
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Client Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Company Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Email Address
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Phone Number
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Total Invoices
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Outstanding Balance
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#10141c] divide-y divide-[#232a3a]">
              {clients && clients.length > 0 ? (
                clients.map((client) => (
                  <tr className="hover:bg-[#1a1f2e] cursor-pointer transition-all duration-200" key={client._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox" className="rounded border-[#232a3a] text-blue-500 focus:ring-blue-500 bg-[#10141c]" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">{client.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{client.companyName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{client.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{client.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{client.totalInvoices || 0}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{client.outstandingBalance || '$0.00'}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                        {client.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-3">
                        <button className="text-blue-400 hover:text-blue-300 transition-colors duration-200" onClick={() => {setSelectedClientId(client._id); setShowClientDetails(true); }}>
                          View
                        </button>
                        <button className="text-red-400 hover:text-red-300 transition-colors duration-200">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="px-6 py-8 text-center text-gray-400">
                    No clients found. Add your first client using the button above.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ClientList 