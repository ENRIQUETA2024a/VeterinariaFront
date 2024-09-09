import React, { useRef } from "react";
import { MyCustomLayout } from "../../components/ui/MyCustomLayout";
import { StackScreenProps } from "@react-navigation/stack";
import { MyRootStackScreens } from "../../navigation/ScreenNavigations";
import { useQuery } from "@tanstack/react-query";
import { listarDiagnosticosByIdConsulta } from "../../../actions/consulta/consulta.diagnosticos";
import { listarExamenesByIdPaciente } from "../../../actions/consulta/consulta.examenes";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { ConsutalDiagnostico } from "../../components/consultas/ConsutalDiagnostico";
import { ConsultaExamenes } from "../../components/consultas/ConsultaExamenes";
import {
  BottomNavigation,
  BottomNavigationTab,
  Button,
  Card,
  Layout,
  Modal,
  Tab,
  TabView,
  Text,
} from "@ui-kitten/components";
import { ConsultasTratamientos } from "../../components/consultas/ConsultasTratamientos";
import { StyleSheet, Text as TextRn } from "react-native";
import { MyIcon } from "../../components/ui/MyIcon";
import { ConsultaProductoTratamientos } from "../../components/consultas/ConsultaProductoTratamientos";

interface Props
  extends StackScreenProps<MyRootStackScreens, "ConsultasResultadosScreen"> {}

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
      <Tab title="Diagnostico">        
          <Layout style={{ height: "100%" }}>
            {diagnosticos.map((data, index) => (
              <ConsutalDiagnostico
                diagnostico={data}
                key={data.id}
                isError={isError}
                isLoading={isLoading}
              />
            ))}
          </Layout>        
      </Tab>
      <Tab title="Examenes">
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
