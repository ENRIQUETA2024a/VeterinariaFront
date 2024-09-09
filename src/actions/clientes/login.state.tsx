import { create } from "zustand";
import { ClienteModel } from "../../domain/models/ClientesModel";
import { clienteLogin } from "./clientes.login";

type LoginStatus = "authenticated" | "unauthenticated";

export interface ClienteLoginState {
  status: LoginStatus;
  user?: ClienteModel;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const useLoginStore = create<ClienteLoginState>()((set, get) => ({
  status: "unauthenticated",
  user: undefined,
  login: async (email: string, password: string) => {
    const respuesta = await clienteLogin(email, password);
    //Si no hay data en la respuesta, sigue sin loguearse
    if (!respuesta) {
      set({ status: "unauthenticated", user: undefined });
      return false;
    }

    set({ status: "authenticated", user: respuesta.clienteLogeado });    
    return true;
  },
  logout: async () => {
    set({ status: "unauthenticated", user: undefined });
    console.log("Cerrando Sesion");
  },
}));
