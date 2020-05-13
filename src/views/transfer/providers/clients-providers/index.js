import { makeProvider } from "react-provider-maker";
import { useState, useEffect } from "react";
import { getClientes } from "../../../../api/transfer";

function useClients() {
  const [state, setState] = useState({
    loading: true,
    data: undefined,
    error: undefined
  });

  useEffect(() => {
    setState({ loading: true, data: undefined });
    getClientes()
      .then(clientes => {
        setState({ loading: false, data: clientes });
      })
      .catch(e => {
        setState({ loading: false, error: e.message });
      });
  }, []);
  return { ...state };
}

export const {
  Provider: ClientsProvider,
  useProvider: useClientsProvider
} = makeProvider(useClients);
