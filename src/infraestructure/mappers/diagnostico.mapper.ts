import { DiagnosticoModel } from "../../domain/models/Diagnosticos.model";
import { DiagnosticoRespuesta } from "../interfaces/diagnosticos.response";


export class DiagnosticoMapper {
    static zoolAPIDiagnosticoToModel(diagnostico: DiagnosticoRespuesta): DiagnosticoModel {
        return {
            id: diagnostico.id,
            detail: diagnostico.detail,
            date_diagnosis: diagnostico.date_diagnosis,
            status: diagnostico.status,
            consults: diagnostico.consults,
        }
    }
}

