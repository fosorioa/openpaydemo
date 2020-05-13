import React from "react";
import {
  ClientsProvider,
  useClientsProvider
} from "./providers/clients-providers";
import { ClientDropDrown } from "../../components/client-drop-down";
import { TextField } from "@material-ui/core";

function TransferView() {
  const { loading, data, error } = useClientsProvider();
  console.log(loading);
  if (loading) return <div>loading...</div>;
  if (error) return <div>Error al cargar los clientes {error}</div>;

  return (
    <div>
      <TextField label="Ammount" />
      <ClientDropDrown
        onChange={() => {
          "";
        }}
        placeholder="Cliente emisor"
        clientes={data}
      />
      <ClientDropDrown
        onChange={() => {
          "";
        }}
        placeholder="Cliente receptor"
        clientes={data}
      />
    </div>
  );
}

export default () => (
  <ClientsProvider>
    <TransferView />
  </ClientsProvider>
);
