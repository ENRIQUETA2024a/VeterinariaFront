import { Button, Layout } from "@ui-kitten/components";
import React from "react";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <Layout style={{ flex: 1, paddingTop: top + 20 }}>
      <Text>ProfileScreen</Text>
      <Button accessoryLeft={<MaterialIcons name="cat" size={20} color={"white"} />}>Presioname</Button>
      <MaterialCommunityIcons name="cat">a</MaterialCommunityIcons>
    </Layout>
  );
};
