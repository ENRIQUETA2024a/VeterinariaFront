import React from "react";
import { MyCustomLayout } from "../../components/ui/MyCustomLayout";
import { Button, Text } from "@ui-kitten/components";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { MyRootStackScreens } from "../../navigation/ScreenNavigations";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
interface Props
  extends StackScreenProps<MyRootStackScreens, "PacientesMenuScreen"> {}

export const PacientesMenuScreen = ({ route }: Props) => {
  const { PacienteId, Nombre } = route.params;
  const navigation=useNavigation<NavigationProp<MyRootStackScreens>>();
  return (
    <MyCustomLayout style={{ alignContent: "center", alignItems: "center" }}>
      <Text category="h4" style={{ textAlign: "center", marginBottom: 10 }}>
        {Nombre}
      </Text>
      <Button
        style={styles.button}
        appearance="outline"
        status="success"
        accessoryRight={
          <MaterialCommunityIcons name="receipt" color="green" size={20} />
        }
        onPress={()=> navigation.navigate('RecetasScreen',{PacienteId:PacienteId,Nombre:Nombre})}
      >
        Recetas
      </Button>


      <Button
        style={styles.button}
        appearance="outline"
        status="warning"
        accessoryRight={
          <FontAwesome5 name="clinic-medical" size={20} color="black" />
        }
        onPress={()=> navigation.navigate('ConsultasScreen',{PacienteId:PacienteId,Nombre:Nombre})}
      >
        Consultas
      </Button>
    </MyCustomLayout>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    width: 300,
  },
});
