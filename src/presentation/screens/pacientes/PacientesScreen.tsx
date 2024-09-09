import React from "react";
import { MyCustomLayout } from "../../components/ui/MyCustomLayout";
import { MyRootStackScreens } from "../../navigation/ScreenNavigations";
import { QueryCache, useQuery, useQueryClient } from "@tanstack/react-query";
import { listarPacienteByIdCLiente } from "../../../actions/pacientes/pacientes.listar";

import { PacienteListado } from "../../components/pacientes/PacienteListado";
import { StackScreenProps } from "@react-navigation/stack";
import { Spinner, Text } from "@ui-kitten/components";

interface Props
  extends StackScreenProps<MyRootStackScreens, "PacientesScreen"> {}

export const PacientesScreen = ({ route }: Props) => {
  const { ClienteId } = route.params;

  const {
    data: pacien,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => listarPacienteByIdCLiente(ClienteId),
    queryKey: ["pacientes"],
  });

  if (isLoading) {
    return (
      <MyCustomLayout style={{ alignItems: "center" }}>
        <Spinner size="medium" />
      </MyCustomLayout>
    );
  }

  if (isError) {
    return (
      <MyCustomLayout style={{ alignItems: "center" }}>
        <Text category="h6" status="danger">
          Error: {error.message}
        </Text>
      </MyCustomLayout>
    );
  }

  return (
    <MyCustomLayout>
      <PacienteListado pacientes={pacien} />
    </MyCustomLayout>
  );
};
