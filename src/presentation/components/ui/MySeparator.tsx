import React, { useContext } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { colors_light } from "../../../config/theme/MyTheme";

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const MySeparator = ({ style }: Props) => {
  return (
    <View style={{ backgroundColor: colors_light.cardBackground }}>
      <View
        style={[
          {
            alignSelf: "center",
            width: "80%",
            height: 1,
            backgroundColor: colors_light.text,
            opacity: 0.5,
            marginVertical: 8,
          },
        ]}
      ></View>
    </View>
  );
};
