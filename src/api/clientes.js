import { http } from ".";

export async function createCliente(data) {
  return await http.post("/client", data);
}

export async function getClientes() {
  return await http.get("/client");
}
