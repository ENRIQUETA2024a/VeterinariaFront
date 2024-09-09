import { List } from "@ui-kitten/components";
import { RecetaModel } from "../../../domain/models/RecetaModel";
import { RecetaCard } from "./RecetaCard";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { RefreshControl } from "react-native";

interface Props {
  recetas: RecetaModel[];
}

export const RecetaListado = ({ recetas }: Props) => {
  return (
    <List
      style={{ backgroundColor: "#ffffff",marginHorizontal: 20, }}
      data={recetas}
      numColumns={1}
      keyExtractor={(item, index) => `${item.id}`}
      renderItem={({ item }) => <RecetaCard receta={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};
