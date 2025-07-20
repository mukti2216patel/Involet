import React from 'react'
import ClientList from './ClientList'
import AddClientForm from './AddClientForm'
import ClientDetails from './ClientDetails'
import {ClientProvider} from '../../context/ClientContext'
import useClient from '../../hooks/useClient'

function ClientsContent() {
  const {showAddForm , showClientDetails} = useClient();
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Clients</h1>
        <p className="mt-2 text-gray-400">Manage your client relationships and track their information</p>
      </div>

      <ClientList />
      {showAddForm && <AddClientForm />}
      {showClientDetails && <ClientDetails />}
    </div>
  )
}

function Clients() {
  return (
    <ClientProvider>
      <ClientsContent />
    </ClientProvider>
  )
}

export default Clients
