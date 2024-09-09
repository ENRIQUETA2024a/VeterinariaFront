import React from "react";
import { Card, Layout, Text } from "@ui-kitten/components";
import { ProductoTratamientoModel } from "../../../domain/models/Producto_TratamientoModel";
import { StyleSheet } from "react-native";

interface Props {
  product_tratamiento: ProductoTratamientoModel;
  index: number;
}

export const ProductoTratamientoCard = ({ product_tratamiento,index }: Props) => {
  return (
    <Layout>
      <Text appearance="hint">Medicamento {index}:</Text>
      <Text style={styles.textStyle}>{product_tratamiento.product}</Text>
    </Layout>
  );
};


const styles = StyleSheet.create({
    textStyle: {
        margin: 8,
      },
})