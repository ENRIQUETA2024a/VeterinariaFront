import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { PropsWithChildren, useEffect } from "react";
import { useLoginStore } from "../../actions/clientes/login.state";
import { MyRootStackScreens } from "../navigation/ScreenNavigations";
export const LoginProvider = ({ children }: PropsWithChildren) => {
  const navigation = useNavigation<StackNavigationProp<MyRootStackScreens>>();
  const { status } = useLoginStore();

  useEffect(() => {
    if (status == "authenticated") {
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeScreen" }],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginScreen" }],
      });
    }
  }, [status]);

  return <>{children}</>;
};
