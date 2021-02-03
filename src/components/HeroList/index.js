import React, { useContext } from 'react';
import {
  View,
} from 'react-native'
import { Context } from '../../context'
import { StyledView, StyledText, StyledImage } from './styles'

export default function ({ navigation }) {
  const { state, heroes } = useContext(Context)
  console.log(heroes.length)
  return (
    <View style={{
      flex: 1
    }} >
      {
        heroes.map((item, index) => {
          return (
            <StyledView key={item.id}
              onPress={()=>{navigation.navigate('Details', { data:item })}}
            >
              <StyledImage source={{ uri: item.thumbnail.path + '.' + item.thumbnail.extension }} />
              <StyledText >{item.name}</StyledText>
            </StyledView>
          )
        })
      }
    </View>
  )
}