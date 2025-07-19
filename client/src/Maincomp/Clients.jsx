import React, { useState } from 'react'

function Clients() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [showClientDetails, setShowClientDetails] = useState(false)
  const [selectedClient, setSelectedClient] = useState(null)

  const mockClients = [
    {
      id: 1,
      name: "John Smith",
      company: "Tech Solutions Inc",
      email: "john@techsolutions.com",
      phone: "+1 (555) 123-4567",
      totalInvoices: 15,
      outstandingBalance: 2500.00,
      status: "Active"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "Design Studio",
      email: "sarah@designstudio.com",
      phone: "+1 (555) 987-6543",
      totalInvoices: 8,
      outstandingBalance: 1200.00,
      status: "Active"
    },
    {
      id: 3,
      name: "Mike Wilson",
      company: "Marketing Pro",
      email: "mike@marketingpro.com",
      phone: "+1 (555) 456-7890",
      totalInvoices: 22,
      outstandingBalance: 0.00,
      status: "Active"
    },
    {
      id: 4,
      name: "Lisa Brown",
      company: "Consulting Corp",
      email: "lisa@consultingcorp.com",
      phone: "+1 (555) 321-0987",
      totalInvoices: 5,
      outstandingBalance: 3500.00,
      status: "Archived"
    }
  ]

  const ClientList = () => (
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
            onClick={() => setShowAddForm(true)}
            className="px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-400 text-white rounded-xl hover:from-green-600 hover:to-emerald-500 transition-all duration-200 font-medium shadow-lg"
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
              {mockClients.map((client) => (
                <tr key={client.id} className="hover:bg-[#1a1f2e] cursor-pointer transition-all duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded border-[#232a3a] text-blue-500 focus:ring-blue-500 bg-[#10141c]" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-white">{client.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{client.company}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{client.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{client.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{client.totalInvoices}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">${client.outstandingBalance.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                      client.status === 'Active' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => {
                          setSelectedClient(client)
                          setShowClientDetails(true)
                        }}
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        View
                      </button>
                      <button className="text-green-400 hover:text-green-300 transition-colors duration-200">
                        Edit
                      </button>
                      <button className="text-red-400 hover:text-red-300 transition-colors duration-200">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const AddEditClientForm = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-6 border border-[#232a3a] w-11/12 md:w-3/4 lg:w-1/2 shadow-2xl rounded-2xl bg-[#10141c]">
        <div className="mt-3">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-white">Add New Client</h3>
            <button 
              onClick={() => setShowAddForm(false)}
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form className="space-y-6">
            <div className="bg-[#1a1f2e] p-6 rounded-xl border border-[#232a3a]">
              <h4 className="text-lg font-semibold text-white mb-6">Basic Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#1a1f2e] p-6 rounded-xl border border-[#232a3a]">
              <h4 className="text-lg font-semibold text-white mb-6">Address Information</h4>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Billing Address *</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter billing address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Shipping Address (Optional)</label>
                  <textarea
                    rows={3}
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
                    className="w-full px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter tax ID"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                  <select className="w-full px-4 py-3 border border-[#232a3a] rounded-xl bg-[#10141c] text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                    <option>Active</option>
                    <option>Archived</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Notes / Special Instructions</label>
                <textarea
                  rows={3}
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

  const ClientDetails = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm overflow-y-auto h-full w-full z-50">
      <div className="relative top-10 mx-auto p-6 border border-[#232a3a] w-11/12 md:w-3/4 lg:w-2/3 shadow-2xl rounded-2xl bg-[#10141c]">
        <div className="mt-3">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-white">Client Details</h3>
            <button 
              onClick={() => setShowClientDetails(false)}
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {selectedClient && (
            <div className="space-y-6">
              <div className="bg-[#1a1f2e] p-6 rounded-xl border border-[#232a3a]">
                <h4 className="text-lg font-semibold text-white mb-6">Client Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Full Name</label>
                    <p className="text-sm text-white mt-2">{selectedClient.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Company</label>
                    <p className="text-sm text-white mt-2">{selectedClient.company}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Email</label>
                    <p className="text-sm text-white mt-2">{selectedClient.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Phone</label>
                    <p className="text-sm text-white mt-2">{selectedClient.phone}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Status</label>
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full mt-2 ${
                      selectedClient.status === 'Active' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    }`}>
                      {selectedClient.status}
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Outstanding Balance</label>
                    <p className="text-sm text-white mt-2">${selectedClient.outstandingBalance.toFixed(2)}</p>
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
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Clients</h1>
          <p className="mt-2 text-gray-400">Manage your client relationships and track their information</p>
        </div>

        <ClientList />

        {showAddForm && <AddEditClientForm />}
        {showClientDetails && <ClientDetails />}
      </div>
    </div>
  )
}

export default Clients
