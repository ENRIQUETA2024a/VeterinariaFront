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
        
      <Input label="Razon" value={consulta.reason} multiline disabled />
      <Input
        label="Antecedentes"
        value={consulta.antecedents}
        multiline
        disabled
      />
      <Input
        label="Enfermedades"
        value={consulta.diseases}
        multiline
        disabled
      />
      <Input
        label="Siguiente Consulta"
        value={consulta.next_consult.toString()}
        multiline
        disabled
      />
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
});
