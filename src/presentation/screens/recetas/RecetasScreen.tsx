import React, { useRef } from 'react'
import { MyCustomLayout } from '../../components/ui/MyCustomLayout'
import { Text } from '@ui-kitten/components'
import { StackScreenProps } from '@react-navigation/stack'
import { MyRootStackScreens } from '../../navigation/ScreenNavigations'
import { useQuery } from '@tanstack/react-query'
import { listarRecetaByIdPaciente } from '../../../actions/recetas/recetas.listar'
import { RecetaListado } from '../../components/recetas/RecetaListado'
import { Alert } from 'react-native'
interface Props
  extends StackScreenProps<MyRootStackScreens, "RecetasScreen"> {}


export const RecetasScreen = ({route}:Props) => {
  
  const recetaIdRef = useRef(route.params.PacienteId)
  const { PacienteId,Nombre } = route.params;

    
  const {data:recetas = [],isError,isLoading,error}=useQuery({
    queryKey:['recetas',recetaIdRef.current], 
    queryFn:()=>listarRecetaByIdPaciente(recetaIdRef.current),
          
         
  })

  if (isLoading) {
    return (
      <MyCustomLayout>
        <Text>Cargando....</Text>
      </MyCustomLayout>
    );
  }

  if (isError) {
    return (
      <MyCustomLayout>
        <Text category='h6'status='danger'>{Nombre} aun no tiene recetas  registradas</Text>
      </MyCustomLayout>
    );
  }


  return (
    <MyCustomLayout>              
        <RecetaListado recetas={recetas} />                                
    </MyCustomLayout>
  )
}
