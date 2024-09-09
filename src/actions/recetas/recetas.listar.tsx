import { zoolomascotasAPI } from "../../config/api/zoolomascotasAPI";
import { RecetaRespuesta } from "../../infraestructure/interfaces/receta.response";
import { RecetaMapper } from "../../infraestructure/mappers/receta.mapper";

export const listarRecetaByIdPaciente = async (id: number) => {
  try {
    const { data } = await zoolomascotasAPI.get<RecetaRespuesta[]>(
      `receta/${id}`
    );
    const recetas = data.map((recetarpta) =>
      RecetaMapper.zoolAPIRecetaToModel(recetarpta)
    );
    return recetas;
  } catch (error) {
    console.log(error);
    throw new Error(`Error obteniendo recetas IdPaciente: ${id}`);
  }
};
