import React, { useRef } from "react";
import { MyCustomLayout } from "../../components/ui/MyCustomLayout";
import { Spinner, Text } from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { MyRootStackScreens } from "../../navigation/ScreenNavigations";
import { listarConsultaByIdPaciente } from "../../../actions/consulta/consulta.listar";
import { useQuery } from "@tanstack/react-query";
import { ConsultaListado } from "../../components/consultas/ConsultaListado";
interface Props
  extends StackScreenProps<MyRootStackScreens, "ConsultasScreen"> {}

export const ConsultasScreen = ({ route }: Props) => {
  const { PacienteId, Nombre } = route.params;
  const pacienteIdRef = useRef(route.params.PacienteId);

  const {
    data: consultas = [],
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["consultas", pacienteIdRef.current],
    queryFn: () => listarConsultaByIdPaciente(pacienteIdRef.current),
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
          {Nombre} aun no tiene consultas registradas
        </Text>
      </MyCustomLayout>
    );
  }

  return (
    <MyCustomLayout>
      <ConsultaListado consultas={consultas} />
    </MyCustomLayout>
  );
};


