import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ClientsView from "./views/clients";
import TransferView from "./views/transfer";

export function MainRouter() {
  return (
    <Switch>
      <Route path="/clientes" component={ClientsView} />
      <Route path="/transfer" component={TransferView} />
      <Redirect to="/clientes" />
    </Switch>
  );
}
