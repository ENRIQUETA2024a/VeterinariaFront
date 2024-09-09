import { zoolomascotasAPI } from "../../config/api/zoolomascotasAPI";
import { ExamenesRespuesta } from "../../infraestructure/interfaces/examenes.response";
import { ExamenesMapper } from "../../infraestructure/mappers/examenes.mapper";



export const listarExamenesByIdPaciente = async (id: number) => {
  try {
    const { data } = await zoolomascotasAPI.get<ExamenesRespuesta[]>(
      `examenes/${id}`
    );
    console.log(data)
    const examenes = data.map((examensrpta) =>
        ExamenesMapper.zoolAPIExamenesToModel(examensrpta)
      );
    return examenes;
  } catch (error) {
    console.log(error);
    throw new Error(`Error obteniendo las examenes IdConsulta: ${id}`);
  }
};
