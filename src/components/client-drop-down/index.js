import React from "react";
import { Select, MenuItem } from "@material-ui/core";
export function ClientDropDrown({ clientes, value, onChange, placeholder }) {
  return (
    <Select
      labelId="demo-customized-select-label"
      id="demo-customized-select"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {clientes.map((client, index) => (
        <MenuItem key={index} value={client.id}>
          {client.email}
        </MenuItem>
      ))}
    </Select>
  );
}
