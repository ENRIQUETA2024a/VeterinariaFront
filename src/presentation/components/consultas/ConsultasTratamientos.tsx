import React, { useRef } from "react";
import { MyCustomLayout } from "../../components/ui/MyCustomLayout";
import { Card, Spinner, Text } from "@ui-kitten/components";
import { listarTratamientoByIdDetail } from "../../../actions/tratamientos/tratamientos.listar";
import { useQuery } from "@tanstack/react-query";

import { StyleSheet } from "react-native";
import { ConsultaProductoTratamientos } from "./ConsultaProductoTratamientos";

interface Props {
  idDiagnostico: number;
}

export const ConsultasTratamientos = ({ idDiagnostico }: Props) => {
  const recetaIdRef = useRef(idDiagnostico);
  const {
    data: tratamientos = [],
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tratamientos", recetaIdRef.current],
    queryFn: () => listarTratamientoByIdDetail(recetaIdRef.current),
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
          Aun no tiene tratamientos registradas
        </Text>
      </MyCustomLayout>
    );
  }

  return (
  <>
    <Card style={{ marginHorizontal: 20, marginTop: 20 }} status="success">
      <Text appearance="hint" status="info">
        Tratamiento:
      </Text>
      <Text style={styles.textStyle}>{tratamientos[0].detail}</Text>
    </Card>
    <ConsultaProductoTratamientos idTratam={tratamientos[0].diagnosis} />
</>

  );
};

const styles = StyleSheet.create({
  textStyle: {
    margin: 8,
  },
});
