import { zoolomascotasAPI } from "../../config/api/zoolomascotasAPI";
import { DiagnosticoRespuesta } from "../../infraestructure/interfaces/diagnosticos.response";
import { DiagnosticoMapper } from "../../infraestructure/mappers/diagnostico.mapper";


export const listarDiagnosticosByIdConsulta = async (id: number) => {
  try {
    const { data } = await zoolomascotasAPI.get<DiagnosticoRespuesta[]>(
      `diagnosticos/${id}`
    );
    const diagnosticos = data.map((diagnosticosrpta) =>
        DiagnosticoMapper.zoolAPIDiagnosticoToModel(diagnosticosrpta)
    );
    return diagnosticos;
  } catch (error) {
    console.log(error);
    throw new Error(`Error obteniendo los diagnosticos IdConsulta: ${id}`);
  }
};
