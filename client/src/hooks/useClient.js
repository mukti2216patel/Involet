import { useContext } from 'react';
import ClientContext from '../context/ClientContext';

function useClient(){
    return useContext(ClientContext);
}
export default useClient;