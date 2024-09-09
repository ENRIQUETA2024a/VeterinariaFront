import { PacienteModel } from "../../domain/models/PacientesModel";
import { PacienteRespuesta } from "../interfaces/pacientes.response";


export class PacienteMapper {
    static zoolAPIPacienteToModel(paciente: PacienteRespuesta): PacienteModel {
        return {
            id: paciente.id,
            breed: paciente.breed,
            names: paciente.names,
            photo:paciente.photo,
            birthday: paciente.birthday,
            age: paciente.age,
            sex: paciente.sex,
            color: paciente.color,
            fur: paciente.fur,
            particularity: paciente.particularity,
            allergy: paciente.allergy,
            status: paciente.status,
            public_id: paciente.public_id,
            client: paciente.client,
        }
    }
}