import { TratamientoModel } from "../../domain/models/TratamientoModel";
import { TratamientoRespuesta } from "../interfaces/tratamientos.reponse";


export class TratamientoMapper{
    static zoolAPITratamientoToModel(tratamiento:TratamientoRespuesta):TratamientoModel{
        return{
            id:        tratamiento.id,
            detail:    tratamiento.detail,
            status:    tratamiento.status,
            diagnosis: tratamiento.diagnosis,
        }
    }
}