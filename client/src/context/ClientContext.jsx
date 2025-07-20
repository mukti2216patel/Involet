import { createContext, useEffect, useState } from 'react'

const ClientContext = createContext();  

const ClientProvider = ({ children }) => {
    const [clients, setClients] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showClientDetails, setShowClientDetails] = useState(false);
    const [selectedClientId, setSelectedClientId] = useState(null);

    const addClient = (client) => {
        setClients(prevClients => {
            const newClients = [...prevClients, client];
            return newClients;
        });
    }

    useEffect(() => {
        console.log(showClientDetails);
    },[showClientDetails]); 
    
    return(     
        <ClientContext.Provider value={{clients, showAddForm, setShowAddForm, addClient , setClients , showClientDetails , setShowClientDetails , selectedClientId , setSelectedClientId}}>
            {children}
        </ClientContext.Provider>
    )

}

export {ClientProvider};
export default ClientContext;
