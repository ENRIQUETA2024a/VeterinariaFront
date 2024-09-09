import { NavigationProp, useNavigation } from "@react-navigation/native";
import { PacienteModel } from "../../../domain/models/PacientesModel";
import { MyRootStackScreens } from "../../navigation/ScreenNavigations";
import { Button, Card, Input, Modal, Text } from "@ui-kitten/components";
import { Image, StyleSheet } from "react-native";
import { PacienteFoto } from "./PacienteFoto";
import { useState } from "react";

interface Props {
  paciente: PacienteModel;
}

export const PacienteCard = ({ paciente }: Props) => {
  const navigation = useNavigation<NavigationProp<MyRootStackScreens>>();
  const [visible, setVisible] = useState(false);


  
  return (
    <Card
      style={styles.cardStyle}
      status="info"      
      onPress={() => navigation.navigate('PacientesMenuScreen',{PacienteId:paciente.id,Nombre:paciente.names})}
    >
      {
        // #TODO si no hay una imagen ponemos por default sin imagen
        paciente.photo.length === 0 ? (
          <Image source={require("../../../assets/no-image.png")} style={{borderRadius:10}} />
        ) :
         (
          <PacienteFoto
            uri={paciente.photo}
            style={{ flex: 1, width: "100%", height: 150}}            
          />
        )
      }      
      <Text style={{ textAlign: "center" }} numberOfLines={2} category="h6">
        {paciente.names}
      </Text>
      <Button onPress={() => setVisible(true)} appearance="ghost" status="warning">Detalles</Button>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
        style={{width:250}}
      >
        <Card disabled={true}>
            <Text category="h5" style={{textAlign:'center'}}>{paciente.names} </Text>
          <Input style={styles.inputs} label="Edad" value={paciente.age} />
          <Input style={styles.inputs} label="Color" value={paciente.color} />
          <Input style={styles.inputs} label="Tipo de Pelo" value={paciente.fur} />
          <Input style={styles.inputs} label="Particularidad" value={paciente.particularity} multiline/>
          <Input style={styles.inputs} label="Cumpleaños" value={paciente.birthday.toString()} />
          <Input style={styles.inputs} label="Raza" value={paciente.breed} />
          <Button onPress={() => setVisible(false)} appearance="ghost">Salir</Button>
        </Card>
      </Modal>
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
  inputs:{
    marginBottom:10
  }
});
