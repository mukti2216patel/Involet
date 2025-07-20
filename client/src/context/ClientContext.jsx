import { createContext, useState } from 'react'

const ClientContext = createContext();  

const ClientProvider = ({ children }) => {
    const [clients, setClients] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);

    const addClient = (client) => {
        setClients(prevClients => {
            const newClients = [...prevClients, client];
            return newClients;
        });
    }

    return(     
        <ClientContext.Provider value={{clients, showAddForm, setShowAddForm, addClient , setClients}}>
            {children}
        </ClientContext.Provider>
    )

}

export {ClientProvider};
export default ClientContext;
