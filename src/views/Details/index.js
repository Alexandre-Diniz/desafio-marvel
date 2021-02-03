import React, { useContext } from 'react';
import {
  View,
} from 'react-native'
import { Context } from '../../context'
import { StyledView, StyledText, StyledImage } from './styles'

export default function ({ navigation, route }) {
  const { state, heroes } = useContext(Context)
  console.log(route.params)
  console.log(heroes.length)
  return (
    <View style={{
      flex: 1
    }} >

      <StyledView
      >
        <StyledImage source={{ uri: route.params.data.thumbnail.path + '.' + route.params.data.thumbnail.extension }} />
        <StyledText >{route.params.data.name}</StyledText>
        <StyledText >{route.params.data.description}</StyledText>
      </StyledView>

    </View>
  )
}
