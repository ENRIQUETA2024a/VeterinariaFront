export type MyRootStackScreens = {  
  LoginScreen: undefined;
  HomeScreen: undefined;
 
  PacientesScreen: {ClienteId:number};

  PacientesMenuScreen: {PacienteId:number, Nombre:string};
  RecetasScreen: {PacienteId:number, Nombre:string};

  ConsultasScreen: {PacienteId:number, Nombre:string};
  ConsultasResultadosScreen: {ConsultaID:number};
  
  ExamenesScreen: {ConsultaID:number};
  DiagnosticosScreen: {ConsultaID:number};
  TratamientosScreen: {DiagnosticoId:number};
  ProductosTratamientos: {TratamientoId:number};

};
