import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, LoginScreen } from "../screens";
import { MyRootStackScreens } from "./ScreenNavigations";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { PacientesScreen } from "../screens/pacientes/PacientesScreen";
import { RecetasScreen } from "../screens/recetas/RecetasScreen";
import { PacientesMenuScreen } from "../screens/pacientes/PacientesMenuScreen";
import { ConsultasScreen } from "../screens/consultas/ConsultasScreen";
import { ConsultasResultadosScreen } from "../screens/consultas/ConsultasResultadosScreen";
import { ExamenesScreen } from "../screens/examenes/ExamenesScreen";
import { DiagnosticosScreen } from "../screens/diagnosticos/DiagnosticosScreen";

const Stack = createStackNavigator<MyRootStackScreens>();
export const MyStackNavigator = () => {
  const navigation = useNavigation<NavigationProp<MyRootStackScreens>>();
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Menu",
          headerLeft: () => (
            <MaterialCommunityIcons
              name="card-account-details"
              size={25}
              style={{ marginLeft: 20 }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
            />
          ),
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PacientesScreen"
        component={PacientesScreen}
        options={{ title: "Mis mascotas 😻" }}
      />

      <Stack.Screen
        name="PacientesMenuScreen"
        component={PacientesMenuScreen}
        options={{ title: "Acciones" }}
      />

      <Stack.Screen
        name="RecetasScreen"
        component={RecetasScreen}
        options={({ route }) => ({
          title: "Recetas de " + route.params.Nombre,
        })}
      />
      <Stack.Screen
        name="ConsultasScreen"
        component={ConsultasScreen}
        options={({ route }) => ({
          title: "Consultas de " + route.params.Nombre,
        })}
      />
      <Stack.Screen
        name="ConsultasResultadosScreen"
        component={ConsultasResultadosScreen}
        options={({ route }) => ({ title: "Detalles de la Consulta" })}
      />

      <Stack.Screen
        name="ExamenesScreen"
        component={ExamenesScreen}
        options={({ route }) => ({ title: "Examenes" })}
      />

      <Stack.Screen
        name="DiagnosticosScreen"
        component={DiagnosticosScreen}
        options={({ route }) => ({ title: "Diagnosticos" })}
      />
    </Stack.Navigator>
  );
};
