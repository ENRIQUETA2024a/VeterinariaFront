import { zoolomascotasAPI } from "../../config/api/zoolomascotasAPI";
import { TratamientoRespuesta } from "../../infraestructure/interfaces/tratamientos.reponse";
import { TratamientoMapper } from "../../infraestructure/mappers/tratamiento.mapper";

export const listarTratamientoByIdDetail = async (id: number) => {
  try {
    const { data } = await zoolomascotasAPI.get<TratamientoRespuesta[]>(
      `tratamientos/${id}`
    );
    const tratamientos = data.map((tratamientosrpta) =>
      TratamientoMapper.zoolAPITratamientoToModel(tratamientosrpta)
    );
    return tratamientos;
  } catch (error) {
    console.log(error);
    throw new Error(`Error obteniendo tratamientos IdDiagnostico: ${id}`);
  }
};
