import { NavigationProp, useNavigation } from "@react-navigation/native";
import { PacienteModel } from "../../../domain/models/PacientesModel";
import { MyRootStackScreens } from "../../navigation/ScreenNavigations";
import { Button, Card, Divider, Input, Text } from "@ui-kitten/components";
import { Image, Modal as Modal, StyleSheet, View } from "react-native";
import { PacienteFoto } from "./PacienteFoto";
import { useState } from "react";

interface Props {
  paciente: PacienteModel;
}

export const PacienteCard = ({ paciente }: Props) => {
  const navigation = useNavigation<NavigationProp<MyRootStackScreens>>();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Card
      style={styles.cardStyle}
      status="info"
      onPress={() =>
        navigation.navigate("PacientesMenuScreen", {
          PacienteId: paciente.id,
          Nombre: paciente.names,
        })
      }
    >
      {
        // #TODO si no hay una imagen ponemos por default sin imagen
        paciente.photo.length === 0 ? (
          <Image
            source={require("../../../assets/no-image.png")}
            style={{ borderRadius: 10 }}
          />
        ) : (
          <PacienteFoto
            uri={paciente.photo}
            style={{ flex: 1, width: "100%", height: 150 }}
          />
        )
      }
      <Text style={{ textAlign: "center" }} numberOfLines={2} category="h6">
        {paciente.names}
      </Text>
      <Button
        onPress={() => setModalVisible(true)}
        appearance="ghost"
        status="success"
      >
        Detalles
      </Button>

      <View style={styles.centeredView}>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>          
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ alignItems: "center" }}>
                  <Text category="h5" style={{ alignItems: "center" }}>
                    {paciente.names}{" "}
                  </Text>
                </View>

                <Divider />
                <Text appearance="hint">Edad:</Text>
                <Text style={styles.textStyle}>{paciente.age}</Text>

                <Text appearance="hint">Color:</Text>
                <Text style={styles.textStyle}>{paciente.color}</Text>

                <Text appearance="hint">Tipo de Pelo:</Text>
                <Text style={styles.textStyle}>{paciente.fur}</Text>

                <Text appearance="hint">Particularidad:</Text>
                <Text style={styles.textStyle}>{paciente.particularity}</Text>

                <Text appearance="hint">Cumpleaños:</Text>
                <Text style={styles.textStyle}>
                  {paciente.birthday.toString()}
                </Text>

                <Text appearance="hint">Raza:</Text>
                <Text style={styles.textStyle}>{paciente.breed}</Text>

                <Button
                  onPress={() => setModalVisible(!modalVisible)}
                  appearance="ghost"
                >
                  Salir
                </Button>
              </View>
            </View>          
        </Modal>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    margin: 3,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  inputs: {
    marginBottom: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    margin: 8,
  },
});
