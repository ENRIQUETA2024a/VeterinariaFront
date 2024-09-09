import { Card, Spinner, Text } from "@ui-kitten/components";
import { MyCustomLayout } from "../ui/MyCustomLayout";
import { StyleSheet, View } from "react-native";
import { DiagnosticoModel } from "../../../domain/models/Diagnosticos.model";
import { ConsultasTratamientos } from "./ConsultasTratamientos";

interface Prop {
  diagnostico: DiagnosticoModel;
  isError: boolean;
  isLoading: boolean;
}

export const ConsutalDiagnostico = ({
  diagnostico,
  isError,
  isLoading,
}: Prop) => {
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
          No hay diagnosticos registrados
        </Text>
      </MyCustomLayout>
    );
  }

  return (
    <>
      <Card style={{ marginHorizontal: 20, marginTop: 20 }} status="danger">
        <Text appearance="hint" status="danger">
          Fecha Diagnostico:
        </Text>
        <Text style={styles.styleText}>
          {diagnostico.date_diagnosis.toString()}
        </Text>

        <Text appearance="hint" status="danger">
          Diagnostico:
        </Text>
        <Text style={styles.styleText}>{diagnostico.detail}</Text>
      </Card>
      <ConsultasTratamientos idDiagnostico={diagnostico.id}  />
    </>
  );
};
const styles = StyleSheet.create({
  viewHeaderCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    flex: 1,
  },
  styleText: {
    margin: 8,
  },
});
