import { Button, Icon, Input, Layout, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { MyIcon } from "../../components/ui/MyIcon";
import { Alert, Image, ScrollView, StyleSheet, TouchableWithoutFeedback, useWindowDimensions, View } from "react-native";
import { useLoginStore } from "../../../actions/clientes/login.state";

//interface Props extends DrawerScreenProps<MyRootStackScreens,"LoginScreen">{}

export const LoginScreen = () => {
  const Logo = require("../../../assets/LogoZooloMascotas.png");
  const {login} = useLoginStore();
  const [passwordView, setPasswordView] = useState(true)

  const toggleSecureEntry = (): void => {
    setPasswordView(!passwordView);
  };


  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const onLogin = async () => {
    if (form.email.length === 0 || form.password.length === 0) {
      return;
    }

    const loginExitoso = await login(form.email, form.password);
    if (loginExitoso) {
      return;
    }
    // console.log(form.email, form.password)
    Alert.alert("Error", "Usuario o contraseña incorrectos");
  };

  const { height } = useWindowDimensions();
  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ paddingTop: height * 0.25, marginHorizontal: 40 }}>
        <Layout style={styles.imageContainer}>
          <Image source={Logo} style={styles.imgLogo} />
        </Layout>

        <Layout>
          <Text category="h1">Ingresar</Text>
          <Text category="p1">Porfavor, ingrese para continuar</Text>
        </Layout>
        <Layout style={{ marginTop: 20 }}>
          <Input
            placeholder="Correo Electronico"
            style={{ marginBottom: 10 }}
            keyboardType="email-address"
            autoCapitalize="none"
            accessoryLeft={<MyIcon name="email-outline" style={{}}  />}
            value={form.email}
            onChangeText={(email) => setForm({ ...form, email })}
          />

          <Input
            placeholder="Contraseña"
            style={{ marginBottom: 10 }}
            secureTextEntry={passwordView}
            accessoryLeft={<MyIcon name="lock-outline" style={{}}  />}
            value={form.password}
            onChangeText={(password) => setForm({ ...form, password })}
        
            accessoryRight={<Icon name={passwordView ? 'eye-off' : 'eye'} style={{}} onPress={toggleSecureEntry} />}

          />
        </Layout>

        <Layout style={{ height: 10 }} />
        <Button
          onPress={onLogin}
          accessoryRight={
            <MyIcon
              white
              name="arrow-forward-outline"
              style={{ height: 32, width: 32 }}
            />
          }
        >
          Ingresar
        </Button>
        <Layout style={{ height: 30 }} />

        <Layout
          style={{
            alignItems: "flex-end",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text>¿No tienes una cuenta? </Text>
          <Text
            status="primary"
            category="s1"
            onPress={() => {
              Alert.alert("¿Como tener una cuenta?", "Recuerda que debes tener almenos una atencion en nuestra veterinaria, luego se te dara tu usuario y contraseña.");
            }}
          >            
           Mas Informacion
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  imgLogo: {
    width: 300,
    height: 125,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: 15,
  },
});
