import { Card, Spinner, Text } from "@ui-kitten/components";
import { ExamenesModel } from "../../../domain/models/Examenes.Model";
import { MyCustomLayout } from "../ui/MyCustomLayout";
import { StyleSheet, View } from "react-native";


interface PropExam {
    examen: ExamenesModel;
    isErrorExam:boolean;
    isLoadingExamn:boolean;    
  }
  
  export const ConsultaExamenes = ({ examen,isErrorExam,isLoadingExamn}: PropExam) => {
  
  
    if (isLoadingExamn) {
      return (
        <MyCustomLayout style={{alignItems:"center"}}>
          <Spinner size="medium" />
        </MyCustomLayout>
      );
    }
  
    if (isErrorExam) {
      return (
        <MyCustomLayout style={{alignItems:"center"}}>
          <Text category="h6" status="danger">
            Aun no hay resultados
          </Text>
        </MyCustomLayout>
      );
    }
    return (
      <Card style={{marginHorizontal:20,marginTop:20}} status="warning"  >
  
        <Text appearance="hint" status="primary">Fecha de Examen:</Text>
        <Text style={styles.styleText}>{examen.exam_date.toString().substring(0,10)}</Text>
  
        <Text appearance="hint" status="primary">Mucosa:</Text>
        <Text style={styles.styleText}>{examen.mucosa}</Text>
  
        <Text appearance="hint" status="primary">Piel:</Text>
        <Text style={styles.styleText}>{examen.piel}</Text>
  
        <Text appearance="hint" status="primary">Conjuntival:</Text>
        <Text style={styles.styleText}>{examen.conjuntival}</Text>
  
        <Text appearance="hint" status="primary">Oral:</Text>
        <Text style={styles.styleText}>{examen.oral}</Text>
  
        <Text appearance="hint" status="primary">Sistema Reproductor:</Text>
        <Text style={styles.styleText}>{examen.sis_reproductor}</Text>
  
        <Text appearance="hint" status="primary">Rectal:</Text>
        <Text style={styles.styleText}>{examen.rectal}</Text>
  
        <Text appearance="hint" status="primary">Ojos:</Text>
        <Text style={styles.styleText}>{examen.ojos}</Text>
  
        <Text appearance="hint" status="primary">Modulos Linfaticos:</Text>
        <Text style={styles.styleText}>{examen.nodulos_linfaticos}</Text>
  
        <Text appearance="hint" status="primary">Locomocion:</Text>
        <Text style={styles.styleText}>{examen.locomocion}</Text>
  
        <Text appearance="hint" status="primary">Sistema Cardiovascular:</Text>
        <Text style={styles.styleText}>{examen.sis_cardiovascular}</Text>
  
        <Text appearance="hint" status="primary">Sistema Respiratorio:</Text>
        <Text style={styles.styleText}>{examen.sis_respiratorio}</Text>
  
        <Text appearance="hint" status="primary">Sistema Digestivo:</Text>
        <Text style={styles.styleText}>{examen.sis_digestivo}</Text>
  
        <Text appearance="hint" status="primary">Sistema Urinario:</Text>
        <Text style={styles.styleText}>{examen.sis_urinario}</Text>
             
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
    styleText:{
      margin:8
    }
  });
  