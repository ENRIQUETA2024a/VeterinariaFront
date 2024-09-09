import { zoolomascotasAPI } from "../../config/api/zoolomascotasAPI";
import { ClienteModel } from "../../domain/models/ClientesModel";
import { ClienteRespuesta } from "../../infraestructure/interfaces/clientes.response";

const returnClienteLogeado = (data: ClienteRespuesta) => {
  const cliente: ClienteModel = {
    Id: data.Id,
    photo: data.photo,
    names: data.names,
    lastnames: data.lastnames,
    document_type: data.document_type,
    document_number: data.document_number,
    address: data.address,
    city: data.city,
    email: data.email,
    phone: data.phone,
    status: data.status,
    password:    data.password,
  };
  return {
    clienteLogeado: cliente,
  };
};

export const clienteLogin = async (email: string, password: string) => {
  try {
    const { data } = await zoolomascotasAPI.post<ClienteRespuesta>("login/", {
      email,
      password,
    });
    console.log("Login Completo:", data);
    return returnClienteLogeado(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};



