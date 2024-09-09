import { Card, Input, styled, Text } from "@ui-kitten/components";
import { RecetaModel } from "../../../domain/models/RecetaModel";
import { StyleSheet, View, ViewProps } from "react-native";
import { ReactElement } from "react";

interface Props {
  receta: RecetaModel;
}

const HeaderCard = ({ number, fecha }) => (
  <View style={styles.viewHeaderCard}>
    <Text category="h6">Codigo Receta: {number}</Text>
    <Text category="h6" style={{ textAlign: "right" }}>
      Fecha: {fecha}
    </Text>
  </View>
);

export const RecetaCard = ({ receta }: Props) => {
  return (
    <Card
      header={(props) => (
        <HeaderCard {...props} number={receta.id} fecha={receta.created_at} />
      )}
      status="warning"
      style={{marginBottom:20}}
      disabled
    >
      {/* <Input
        label="Fecha Receta"
        value={receta.created_at.toString()}
        disabled
      /> */}


      <Text appearance="hint" status="info">Descripcion:</Text>
      <Text style={styles.textStyle}>{receta.description}</Text>

      <Text appearance="hint" status="success">Indicaciones:</Text>
      <Text style={styles.textStyle}>{receta.indicaciones}</Text>
    
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
  textStyle:{
    margin:8
  }
});
