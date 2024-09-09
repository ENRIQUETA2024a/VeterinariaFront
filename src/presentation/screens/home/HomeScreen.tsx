import React from "react";
import { MyCustomLayout } from "../../components/ui/MyCustomLayout";
import { ScrollView, StyleSheet } from "react-native";
import { Button } from "@ui-kitten/components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLoginStore } from "../../../actions/clientes/login.state";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MyRootStackScreens } from "../../navigation/ScreenNavigations";

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<MyRootStackScreens>>();
  const { user } = useLoginStore();
  return (
    <MyCustomLayout>
      <ScrollView style={{marginHorizontal: 30,}}>
        {/* {EmpleadosItems.map((item, index) => (
          <MyMenuItem
            key={item.component}
            {...item}
            isFirst={index === 0}
            isLast={index === EmpleadosItems.length - 1}
          ></MyMenuItem>
        ))} */}     

        <Button
          style={styles.button}
          size="large"
          status="basic"
          appearance="outline"
          accessoryRight={
            <MaterialCommunityIcons name="paw-outline" size={25} color="black" />
          }
          onPress={() =>
            navigation.navigate("PacientesScreen", {
              ClienteId: user.Id,
            })
          }
        >
          Mis mascotas
        </Button>
      
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
