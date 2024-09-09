import { RecetaModel } from "../../domain/models/RecetaModel";
import { RecetaRespuesta } from "../interfaces/receta.response";



export class RecetaMapper {
    static zoolAPIRecetaToModel(receta: RecetaRespuesta): RecetaModel {
        return {
            id: receta.id,
            description: receta.description,
            indicaciones: receta.indicaciones,
            created_at: receta.created_at,
            status: receta.status,
            patient: receta.patient,
        }
    }
}

