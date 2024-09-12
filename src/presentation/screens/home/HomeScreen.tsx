import React from "react";
import { MyCustomLayout } from "../../components/ui/MyCustomLayout";
import { ScrollView, StyleSheet } from "react-native";
import { Button } from "@ui-kitten/components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLoginStore } from "../../../actions/clientes/login.state";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MyRootStackScreens } from "../../navigation/ScreenNavigations";
import * as Notifications from 'expo-notifications';
import { MyNotificacion } from "../../../config/notificaciones/MyNotificacion";

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<MyRootStackScreens>>();
  const { user } = useLoginStore();
  Notifications.scheduleNotificationAsync({
    content: {
      title: 'TEST ',
      body: "TESTEEO",
    },
    trigger: null,
  });
  return (
    <MyCustomLayout>
      <ScrollView style={{ marginHorizontal: 30 }}>
        <Button
          style={styles.button}
          size="large"
          status="basic"
          appearance="outline"
          accessoryRight={
            <MaterialCommunityIcons
              name="paw-outline"
              size={25}
              color="black"
            />
          }
          onPress={() =>
            navigation.navigate("PacientesScreen", {
              ClienteId: user.Id,
            })
          }
        >
          Mis mascotas
        </Button>
         <MyNotificacion /> 
      </ScrollView>
    </MyCustomLayout>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    borderRadius: 18,
  },
});
