import React from 'react'
import { MyCustomLayout } from '../../components/ui/MyCustomLayout'
import { List, Text } from '@ui-kitten/components'
import { ConsultaModel } from '../../../domain/models/ConsultaModel'
import { ConsultaCard } from './ConsultaCard'

interface Props{
    consultas:ConsultaModel[]
}

export const ConsultaListado = ({consultas}:Props) => {
  return (
    <List style={{backgroundColor: "#ffffff",marginHorizontal: 20,}}
      data={consultas}
      numColumns={1}
      keyExtractor={(item, index) => `${item.id}`}
      renderItem={({ item }) => <ConsultaCard consulta={item} />}
    />
  )
}
