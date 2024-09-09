// import React, { useEffect, useRef, useState } from "react";
// import { MyCustomLayout } from "../../components/ui/MyCustomLayout";
// import {
//   Button,
//   Card,
//   Divider,
//   Input,
//   List,
//   ListItem,
//   Text,
// } from "@ui-kitten/components";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { colors_light } from "../../../config/theme/MyTheme";
// import { MyFloatingActionButton } from "../../components/ui/MyFloatingActionButton";
// import { NavigationProp, useNavigation } from "@react-navigation/native";
// import { Formik } from "formik";


// import { MyRootStackScreens } from "../../navigation/ScreenNavigations";

// export const CargosScreen = () => {
//   const navigation = useNavigation<NavigationProp<MyRootStackScreens>>();
//   const queryClient = useQueryClient();

//   const CargoId = useRef(-1);

//   const { data: cargos, error } = useQuery({
//     queryKey: ["cargos"],
//     queryFn: () => getCargos(),
//   });


//   const { data: cargos_byid,error: error_ById,refetch:MyQuery  } = useQuery({
//     queryKey: ["cargos_byid"],
//     queryFn: () => getCargosById(CargoId.current),    
//   });

//   const mutation = useMutation({
//     mutationFn: (data: CargosRespuesta) =>
//       updateAndCreateCargo({ ...data, IdCargo: -1 }),
//     onSuccess(data: CargosRespuesta) {
//       queryClient.invalidateQueries({ queryKey: ["cargos", data.IdCargo] });

//       console.log("success");
//       console.log(data);

//     },
//   });

//   const renderItem = ({    item,    index,  }: {    item: CargosModel;    index: number;  }): React.ReactElement => (
//     <ListItem
//       style={{ borderRadius: 50, marginBottom: 5 }}
//       key={item.IdCargo}
//       title={`${item.NombreCargo}`}
//       description={`Codigo: ${item.IdCargo}`}
//       accessoryLeft={<MaterialCommunityIcons name="circle-medium" size={25} />}
//       accessoryRight={
//         <MaterialCommunityIcons
//           name="chevron-right"
//           size={25}
//           color={colors_light.primary}
//         />
//       }
//       onPress={() => {
//         CargoId.current = item.IdCargo;
        
//       }}
//     />
//   );

//   useEffect(() => {
//     console.log(error);
//   }, [error]);

//   if (!cargos) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <>
//       <Formik
//         initialValues={cargos_byid}
//         onSubmit={(values) => mutation.mutate(values)}
//       >
//         {({ handleChange, handleSubmit, values, errors, setFieldValue }) => (
//           <Card
//             status="primary"
//             style={{ marginHorizontal: 20, marginTop: 20 }}
//           >
//             <Input
//               label="Descripcion del Cargo"
//               style={{ marginVertical: 10 }}
//               onChangeText={handleChange('NombreCargo')}
//               value={values.NombreCargo}
//             />
//             <Button onPress={() => handleSubmit()}>Agregar</Button>
//           </Card>
//         )}
//       </Formik>

//       <MyCustomLayout>
//         <List
//           style={{ backgroundColor: colors_light.background }}
//           data={cargos}
//           ItemSeparatorComponent={Divider}
//           renderItem={renderItem}
//         />
//       </MyCustomLayout>
//       <MyFloatingActionButton
//         iconame="plus-outline"
//         onPress={() => navigation.navigate("CargosScreenRU", { CargoId: -1 })}
//         style={{
//           position: "absolute",
//           bottom: 30,
//           right: 20,
//         }}
//       />
//     </>
//   );
// };
