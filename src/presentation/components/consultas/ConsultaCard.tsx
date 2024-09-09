import React, { useEffect, useRef } from "react";
import { Button, Card, Icon, IconElement, Input, Text } from "@ui-kitten/components";
import { ConsultaModel } from "../../../domain/models/ConsultaModel";
import { Alert, ImageProps, StyleSheet, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MyRootStackScreens } from "../../navigation/ScreenNavigations";

interface Props {
  consulta: ConsultaModel;
}

export const ConsultaCard = ({ consulta }: Props) => {
    const navigation = useNavigation<NavigationProp<MyRootStackScreens>>();

  const pulseIconRef = useRef<Icon<Partial<ImageProps>>>();


  useEffect(() => {
    pulseIconRef.current.startAnimation();
  }, []);



  const renderPulseIcon = (props): IconElement => (
    <Icon
      {...props}
      ref={pulseIconRef}
      animationConfig={{ cycles: Infinity }}
      animation='pulse'
      name='activity'
    />
  );


  const HeaderCard = ({ fecha,consultaid }) => (
    <View style={styles.viewHeaderCard}>
      <Text category="h6" >
        Fecha Consulta: {fecha}
      </Text>
      <Button
        size="small"
        appearance="outline"
        accessoryRight={
            renderPulseIcon
        }
        status="success"
        onPress={()=>navigation.navigate('ConsultasResultadosScreen',{ConsultaID:consultaid}) }
      />
    </View>
  );

  return (
    <Card
      header={(props) => <HeaderCard fecha={consulta.consult_date} consultaid={consulta.id} />}
      status="success"
      disabled
      style={{marginBottom:20}}
    >

      <Text appearance="hint"  status="info">Razon:</Text>
      <Text style={styles.textStyle}>{consulta.reason}</Text> 

      <Text appearance="hint"  status="info">Antecedentes:</Text>
      <Text style={styles.textStyle}>{consulta.antecedents}</Text> 

      <Text appearance="hint"  status="info">Enfermedades:</Text>
      <Text style={styles.textStyle}>{consulta.diseases}</Text> 

      <Text appearance="hint"  status="info">Siguiente Consulta:</Text>
      <Text style={styles.textStyle}>{consulta.next_consult.toString()}</Text> 

     
    </Card>
  );
};

const styles = StyleSheet.create({
  viewHeaderCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    flex: 1,
  },
  textStyle:{
    margin:8
  }
});
