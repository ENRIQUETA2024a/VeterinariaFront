import React, { useRef } from "react";
import { MyCustomLayout } from "../../components/ui/MyCustomLayout";
import { Card, Input, Text } from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { MyRootStackScreens } from "../../navigation/ScreenNavigations";
import { useQuery } from "@tanstack/react-query";
import { listarDiagnosticosByIdConsulta } from "../../../actions/consulta/consulta.diagnosticos";
import { listarExamenesByIdPaciente } from "../../../actions/consulta/consulta.examenes";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { DiagnosticoModel } from "../../../domain/models/Diagnosticos.model";
import { ExamenesModel } from "../../../domain/models/Examenes.Model";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";

interface Props
  extends StackScreenProps<MyRootStackScreens, "ConsultasResultadosScreen"> {}

const HeaderCard = ({ titulo }) => (
  <View style={styles.viewHeaderCard}>
    <Text category="h6">{titulo}</Text>
  </View>
);

export const ConsultasResultadosScreen = ({ route }: Props) => {
  const consultaIdRef = useRef(route.params.ConsultaID);
  const navigation = useNavigation<NavigationProp<MyRootStackScreens>>();

  const {
    data: diagnosticos = [],
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["diagnosticos", consultaIdRef.current],
    queryFn: () => listarDiagnosticosByIdConsulta(consultaIdRef.current),
  });

  const {
    data: examenes = [],
    isError: errorExame,
    isLoading: errorExamLoading,
    error: errorExam,
  } = useQuery({
    queryKey: ["examenes", consultaIdRef.current],
    queryFn: () => listarExamenesByIdPaciente(consultaIdRef.current),
  });
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  return (
    <MyCustomLayout>
      <ScrollView>
        <Card>
          {diagnosticos.map((data, index) => (
            <Diagnosticos diagnostico={data} />
          ))}
        </Card>
        <Card>
          {examenes.map((data, index) => (
            <Examenes examen={data} />
          ))}
        </Card>
      </ScrollView>
    </MyCustomLayout>
  );
};

interface Prop {
  diagnostico: DiagnosticoModel;
}

const Diagnosticos = ({ diagnostico }: Prop) => {
  return (
    <Card header={() => <HeaderCard titulo={"Diagnostico"} />}>
      <Input
        label="Fecha Diagnostico"
        value={diagnostico.date_diagnosis.toString()}
        disabled
        multiline
      />
      <Input
        label="Diagnostico"
        value={diagnostico.detail}
        disabled
        multiline
      />
    </Card>
  );
};

interface PropExam {
  examen: ExamenesModel;
}

const Examenes = ({ examen }: PropExam) => {
  return (
    <Card header={() => <HeaderCard titulo={"Examenes"} />}>
      <Input
        label="Fecha de Examen"
        value={examen.exam_date.toString()}
        disabled
        multiline
      />
      <Input label="Mucosa" value={examen.mucosa} disabled multiline />
      <Input label="Piel" value={examen.piel} disabled multiline />
      <Input
        label="Conjuntival"
        value={examen.conjuntival}
        disabled
        multiline
      />
      <Input label="Oral" value={examen.oral} disabled multiline />
      <Input
        label="Sistema Reproductivo"
        value={examen.sis_reproductor}
        disabled
        multiline
      />
      <Input label="Rectal" value={examen.rectal} disabled multiline />
      <Input label="Ojos" value={examen.ojos} disabled multiline />
      <Input
        label="Nodulos Linfaticos"
        value={examen.nodulos_linfaticos}
        disabled
        multiline
      />
      <Input label="Locomotor" value={examen.locomocion} disabled multiline />
      <Input
        label="Sistema Cardiovascular"
        value={examen.sis_cardiovascular}
        disabled
        multiline
      />
      <Input
        label="Sistema Respiratorio"
        value={examen.sis_respiratorio}
        disabled
        multiline
      />
      <Input
        label="Sistema Digestivo"
        value={examen.sis_digestivo}
        disabled
        multiline
      />
      <Input
        label="Sistema Urinario"
        value={examen.sis_urinario}
        disabled
        multiline
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  viewHeaderCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    flex: 1,
  },
});
