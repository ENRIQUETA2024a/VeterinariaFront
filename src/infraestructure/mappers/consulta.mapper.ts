import { ConsultaModel } from "../../domain/models/ConsultaModel";
import { ConsultaRespuesta } from "../interfaces/consulta.response";

export class ConsultaMapper {
    static zoolAPIConsultaToModel(consulta: ConsultaRespuesta): ConsultaModel {
        return {
            id: consulta.id,
            consult_date: consulta.consult_date,
            reason: consulta.reason,
            antecedents: consulta.antecedents,
            diseases: consulta.diseases,
            next_consult: consulta.next_consult,
            status: consulta.status,
            patient: consulta.patient,
        }
    }
}