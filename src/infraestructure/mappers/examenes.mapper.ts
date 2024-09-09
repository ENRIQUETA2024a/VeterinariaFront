import { ExamenesModel } from "../../domain/models/Examenes.Model";
import { ExamenesRespuesta } from "../interfaces/examenes.response";


export class ExamenesMapper {
    static zoolAPIExamenesToModel(examenes: ExamenesRespuesta): ExamenesModel {
        return {
            id: examenes.id,
            consults: examenes.consults,
            exam_date: examenes.exam_date,
            mucosa: examenes.mucosa,
            piel: examenes.piel,
            conjuntival: examenes.conjuntival,
            oral: examenes.oral,
            sis_reproductor: examenes.sis_reproductor,
            rectal: examenes.rectal,
            ojos: examenes.ojos,
            nodulos_linfaticos: examenes.nodulos_linfaticos,
            locomocion: examenes.locomocion,
            sis_cardiovascular: examenes.sis_cardiovascular,
            sis_respiratorio: examenes.sis_respiratorio,
            sis_digestivo: examenes.sis_digestivo,
            sis_urinario: examenes.sis_urinario,
            status: examenes.status,
        }
    }
}