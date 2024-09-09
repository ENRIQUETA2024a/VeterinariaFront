import { Card, Input, Text } from "@ui-kitten/components";
import { RecetaModel } from "../../../domain/models/RecetaModel";
import { StyleSheet, View, ViewProps } from "react-native";
import { ReactElement } from "react";

interface Props {
  receta: RecetaModel;
}
const Header = (props: ViewProps): ReactElement => (
  <View {...props}>
    <Text category="h6">Receta</Text>
  </View>
);

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
      <Input
        label="Descripcion"
        value={receta.description}
        multiline
        disabled
      />
      <Input
        label="Indicaciones"
        value={receta.indicaciones}
        multiline
        disabled
      />
      {/* <Input  label="Estado" value={receta.status === 0 ? 'Activo' : 'Desactivado'}  disabled/> */}
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
