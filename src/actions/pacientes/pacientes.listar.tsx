import { zoolomascotasAPI } from "../../config/api/zoolomascotasAPI";
import { PacienteRespuesta } from "../../infraestructure/interfaces/pacientes.response";
import { PacienteMapper } from "../../infraestructure/mappers/pacientes.mapper";

export const listarPacienteByIdCLiente = async (id: number) => {
  try {
    const { data } = await zoolomascotasAPI.get<PacienteRespuesta[]>(
      `paciente/${id}`
    );
    const pacientes = data.map((pacientesrpta) =>
      PacienteMapper.zoolAPIPacienteToModel(pacientesrpta)
    );
    return pacientes;
  } catch (error) {
    console.log(error);
    throw new Error(`Error obteniendo recetas IdCliente: ${id}`);
  }
};
