import { zoolomascotasAPI } from "../../config/api/zoolomascotasAPI";
import { ConsultaRespuesta } from "../../infraestructure/interfaces/consulta.response";
import { ConsultaMapper } from "../../infraestructure/mappers/consulta.mapper";


export const listarConsultaByIdPaciente = async (id: number) => {
  try {
    const { data } = await zoolomascotasAPI.get<ConsultaRespuesta[]>(
      `consultas/${id}`
    );
    const consultas = data.map((consultasrpta) =>
      ConsultaMapper.zoolAPIConsultaToModel(consultasrpta)
    );
    return consultas;
  } catch (error) {
    console.log(error);
    throw new Error(`Error obteniendo las consultas IdPaciente: ${id}`);
  }
};
