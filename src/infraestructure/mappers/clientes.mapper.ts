import { ClienteModel } from "../../domain/models/ClientesModel";
import { ClienteRespuesta } from "../interfaces/clientes.response";

export class ClienteMapper {
  static zoolAPIClienteToModel(cliente: ClienteRespuesta): ClienteModel {
    return {
      Id: cliente.Id,
      photo: cliente.photo,
      names: cliente.names,
      lastnames: cliente.lastnames,
      document_type: cliente.document_type,
      document_number: cliente.document_number,
      address: cliente.address,
      city: cliente.city,
      email: cliente.email,
      phone: cliente.phone,
      status: cliente.status,
      password: cliente.password,
    };
  }
}
