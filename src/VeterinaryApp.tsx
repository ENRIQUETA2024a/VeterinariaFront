import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import MyDrawerNavigator from "./presentation/navigation/MyDrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginProvider } from "./presentation/providers/LoginProvider";

const queryClient = new QueryClient();

 export const VeterinaryApp = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            <LoginProvider>
            <MyDrawerNavigator /> 
            </LoginProvider> 
          </NavigationContainer>
        </ApplicationProvider>
      </QueryClientProvider>
    </>
  );
};
