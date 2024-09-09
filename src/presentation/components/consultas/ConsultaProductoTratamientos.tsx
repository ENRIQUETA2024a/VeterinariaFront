import React, { useRef } from "react";
import { MyCustomLayout } from "../../components/ui/MyCustomLayout";
import { Card, List, Spinner, Text } from "@ui-kitten/components";
import { useQuery } from "@tanstack/react-query";
import { listarProductoTratamientoByIdTratamiento } from "../../../actions/product_tratamiento/product_tratamiento.listar";
import { ProductoTratamientoCard } from "../producto_tratamientos/ProductoTratamientoCard";

interface Props {
  idTratam: number;
}

export const ConsultaProductoTratamientos = ({ idTratam }: Props) => {
  const idTratamiento = useRef(idTratam);

  const {
    data: product_tratamiento = [],
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product_tratamiento", idTratamiento.current],
    queryFn: () =>
      listarProductoTratamientoByIdTratamiento(idTratamiento.current),
  });

  if (isLoading) {
    return (
      <MyCustomLayout style={{ alignItems: "center" }}>
        <Spinner size="medium" />
      </MyCustomLayout>
    );
  }

  if (isError) {
    return (
      <MyCustomLayout style={{ alignItems: "center" }}>
        <Text category="h6" status="danger">
          Aun no hay productos registrados para el tratamiento
        </Text>
      </MyCustomLayout>
    );
  }
  return (
    <Card style={{marginHorizontal:20,marginTop:20}} status="info" >
      <Text appearance="hint" status="info" style={{margin:8}}>
        Medicacion:
      </Text>
      <List
        style={{ backgroundColor: "#ffffff", marginHorizontal: 20 }}
        data={product_tratamiento}
        numColumns={1}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item,index }) => (
          <ProductoTratamientoCard product_tratamiento={item} index={index+1}/>
        )}
      />
    </Card>
  );
};
