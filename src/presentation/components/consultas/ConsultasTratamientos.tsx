import React, { useRef } from "react";
import { MyCustomLayout } from "../../components/ui/MyCustomLayout";
import { Card, Layout,  Spinner, Text } from "@ui-kitten/components";
import { listarTratamientoByIdDetail } from "../../../actions/tratamientos/tratamientos.listar";
import { useQuery } from "@tanstack/react-query";

import { StyleSheet } from "react-native";
import { listarProductoTratamientoByIdTratamiento } from "../../../actions/product_tratamiento/product_tratamiento.listar";

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

  //##################################

  const tratamientoIdRef = useRef(tratamientos && tratamientos[0].diagnosis);
  const {
    data: product_tratamiento = [],
    isError: isErrirPro,
    isLoading: isLoadingPro,
    error: errorPro,
  } = useQuery({
    queryKey: ["product_tratamiento", tratamientoIdRef.current],
    queryFn: () =>
      listarProductoTratamientoByIdTratamiento(tratamientoIdRef.current),
  });

  return (
    <Card style={{ marginHorizontal: 20, marginTop: 20 }} status="success">
      <Text appearance="hint" status="info">
        Tratamiento:
      </Text>
      <Text style={styles.textStyle}>{tratamientos[0].detail}</Text>

      <Text appearance="hint" status="info" style={{ marginVertical: 10 }}>
        Medicacion:
      </Text>
      {product_tratamiento.map((data, index) => (
        <Layout key={index}>
          <Text appearance="hint">Medicamento {index + 1}:</Text>
          <Text style={styles.textStyle}>{data.product}</Text>
        </Layout>
      ))}
    </Card>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    margin: 8,
  },
});
