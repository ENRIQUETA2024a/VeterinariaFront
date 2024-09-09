import React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { MySeparator } from "./MySeparator";
import { colors_light } from "../../../config/theme/MyTheme";

interface Properties {
  name: string;
  icon: any;    
  component: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export const MyMenuItem = ({name,icon,component,isFirst=false,isLast=false,}: Properties) => {
  const navigation = useNavigation<any>();
  return (
    <>
      <Pressable onPress={() => navigation.navigate(component)}>
        <Layout
          style={{
            ...styles.container,
            backgroundColor: colors_light.cardBackground,
            ...(isFirst && {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
            }),
            ...(isLast && {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingBottom: 10,
            }),
          }}
        >
          <MaterialCommunityIcons name={icon} size={25} color='blue' style={{marginRight:10}} />
          <Text>{name}</Text>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color='white'
            style={{ marginLeft: "auto", color: colors_light.primary }}
          />
        </Layout>
      </Pressable>
      {!isLast && (<MySeparator />)}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
