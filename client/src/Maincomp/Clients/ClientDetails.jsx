import React, { useEffect, useState } from 'react'
import useClient from '../../hooks/useClient'
import axios from 'axios'
import { toast } from 'react-toastify'

function ClientDetails() {
  const {setShowClientDetails , selectedClientId} = useClient();  
  const [currClient , setCurrClient] = useState(null);
  // console.log(selectedClientId);
  useEffect(() => {
    async function fetchClientDetails() {
      try{
        const res = await axios.get(`/api/v1/clients/get-client/${selectedClientId}`, {
          headers: {
            Authorization: `${localStorage.getItem('token')}`
          }
        });
        if(res.status === 200){
          setCurrClient(res.data.client);
        }
        else{
          toast.error(res.data.message);
        }
      }
      catch(err)
      {
        console.log(err);
        toast.error(err);
      }
    }
    fetchClientDetails();
  } , [selectedClientId]);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm overflow-y-auto h-full w-full z-50">
      <div className="relative top-10 mx-auto p-6 border border-[#232a3a] w-11/12 md:w-3/4 lg:w-2/3 shadow-2xl rounded-2xl bg-[#10141c]">
        <div className="mt-3">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-white">Client Details</h3>
            <button className="text-gray-400 hover:text-gray-300 transition-colors duration-200" onClick={() => setShowClientDetails(false)}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {currClient ? (
            <div className="space-y-6">
              <div className="bg-[#1a1f2e] p-6 rounded-xl border border-[#232a3a]">
                <h4 className="text-lg font-semibold text-white mb-6">Client Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Full Name</label>
                    <p className="text-sm text-white mt-2">{currClient.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Company</label>
                    <p className="text-sm text-white mt-2">{currClient.companyName}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Email</label>
                    <p className="text-sm text-white mt-2">{currClient.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Phone</label>
                    <p className="text-sm text-white mt-2">{currClient.phone}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Status</label>
                    <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full mt-2 bg-green-500/20 text-green-400 border border-green-500/30">
                      {currClient.status}
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Outstanding Balance</label>
                      <p className="text-sm text-white mt-2">1234</p>
                  </div>
                </div>
              </div>

            <div className="border-b border-[#232a3a]">
              <nav className="-mb-px flex space-x-8">
                <button className="border-blue-500 text-blue-400 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm">
                  Invoice History
                </button>
                <button className="border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm">
                  Payment History
                </button>
                <button className="border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm">
                  Activity Timeline
                </button>
              </nav>
            </div>

            <div className="bg-[#1a1f2e] rounded-xl border border-[#232a3a] overflow-hidden">
              <div className="px-6 py-4 border-b border-[#232a3a]">
                <h5 className="text-lg font-semibold text-white">Invoice History</h5>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-[#232a3a]">
                  <thead className="bg-[#10141c]">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Invoice #
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Outstanding
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#1a1f2e] divide-y divide-[#232a3a]">
                    <tr className="hover:bg-[#10141c] transition-all duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">INV-001</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">2024-01-15</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$1,500.00</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$1,500.00</td>
                    </tr>
                    <tr className="hover:bg-[#10141c] transition-all duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">INV-002</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">2024-01-10</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$1,000.00</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                          Paid
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$0.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl hover:from-blue-600 hover:to-cyan-500 transition-all duration-200 font-medium shadow-lg">
                Send Email
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-400 text-white rounded-xl hover:from-green-600 hover:to-emerald-500 transition-all duration-200 font-medium shadow-lg">
                Create Invoice
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-200 font-medium shadow-lg">
                Edit Client
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-gray-400">Loading client details...</div>
          </div>
        )}
        </div>
      </div>
    </div>  
  )
}

export default ClientDetails 