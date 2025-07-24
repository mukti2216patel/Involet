import { createContext, useState } from 'react';

const ClientContext = createContext();  

const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showClientDetails, setShowClientDetails] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [currClient, setCurrClient] = useState(null);

  const addClient = (client) => {
    setClients(prevClients => [...prevClients, client]);
  };



  return (     
    <ClientContext.Provider value={{
      clients,
      showAddForm,
      setShowAddForm,
      addClient,
      setClients,
      showClientDetails,
      setShowClientDetails,
      selectedClientId,
      setSelectedClientId,
      currClient,
      setCurrClient
    }}>
      {children}
    </ClientContext.Provider>
  );
};

export { ClientProvider };
export default ClientContext;
