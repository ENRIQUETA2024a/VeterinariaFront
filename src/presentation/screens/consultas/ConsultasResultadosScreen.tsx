import React, { useRef } from "react";

import { StackScreenProps } from "@react-navigation/stack";
import { MyRootStackScreens } from "../../navigation/ScreenNavigations";
import { useQuery } from "@tanstack/react-query";
import { listarDiagnosticosByIdConsulta } from "../../../actions/consulta/consulta.diagnosticos";
import { listarExamenesByIdPaciente } from "../../../actions/consulta/consulta.examenes";
import { ScrollView } from "react-native-gesture-handler";
import { ConsutalDiagnostico } from "../../components/consultas/ConsutalDiagnostico";
import { ConsultaExamenes } from "../../components/consultas/ConsultaExamenes";
import { Layout, Tab, TabView } from "@ui-kitten/components";
import { StyleSheet} from "react-native";
import { MyIcon } from "../../components/ui/MyIcon";
 
interface Props
  extends StackScreenProps<MyRootStackScreens, "ConsultasResultadosScreen"> {}

export const ConsultasResultadosScreen = ({ route }: Props) => {
  const consultaIdRef = useRef(route.params.ConsultaID);

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
    isError: isErrorExame,
    isLoading: isErrorExamLoading,
    error: errorExam,
  } = useQuery({
    queryKey: ["examenes", consultaIdRef.current],
    queryFn: () => listarExamenesByIdPaciente(consultaIdRef.current),
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <TabView
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <Tab title="Diagnostico" icon={<MyIcon name="heart-outline" />}>
        <ScrollView>
          <Layout
            style={[
              styles.tabContainer,
              {
                marginBottom: 100,
              },
            ]}
          >
            {diagnosticos.map((data, index) => (
              <ConsutalDiagnostico
                diagnostico={data}
                key={data.id}
                isError={isError}
                isLoading={isLoading}
              />
            ))}
          </Layout>
        </ScrollView>
      </Tab>
      <Tab title="Examenes" icon={<MyIcon name="file-text-outline" />}>
        <ScrollView>
          <Layout
            style={[
              styles.tabContainer,
              {
                marginBottom: 100,
              },
            ]}
          >
            {examenes.map((data, index) => (
              <ConsultaExamenes
                examen={data}
                key={data.id}
                isErrorExam={isErrorExame}
                isLoadingExamn={isErrorExamLoading}
              />
            ))}
          </Layout>
        </ScrollView>
      </Tab>
    </TabView>
  );
};

const styles = StyleSheet.create({
  tabContainer: { height: "100%" },
});
