import { createContext, useState } from 'react'

const ClientContext = createContext();  

const ClientProvider = ({ children }) => {
    const [clients, setClients] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);

    const addClient = (client) => {
        setClients([...clients, client]);
    }

    return(     
        <ClientContext.Provider value={{clients, showAddForm, setShowAddForm, addClient}}>
            {children}
        </ClientContext.Provider>
    )

}

export {ClientProvider};
export default ClientContext;
