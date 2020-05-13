import { http } from ".";

export async function getClientes(
  customerSenderId,
  customerReceiverId,
  amount,
  description,
  order_id
) {
  return await http.post(`/transfer/${customerSenderId}`, {
    customer_id: customerReceiverId,
    amount,
    description,
    order_id
  });
}
