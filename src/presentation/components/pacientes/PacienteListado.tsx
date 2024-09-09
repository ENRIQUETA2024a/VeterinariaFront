import { List } from "@ui-kitten/components";
import { PacienteModel } from "../../../domain/models/PacientesModel";
import { PacienteCard } from "./PacienteCard";

interface Props {
  pacientes: PacienteModel[];
}

export const PacienteListado = ({ pacientes }: Props) => {

  
  return (
    <List style={{backgroundColor: "#ffffff",marginHorizontal: 20,}}
      data={pacientes}
      numColumns={1}
      keyExtractor={(item, index) => `${item.id}`}
      renderItem={({ item }) => <PacienteCard paciente={item} />}
    />
  );
};
