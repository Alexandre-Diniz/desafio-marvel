import React, { useState, useContext, useEffect } from 'react'
import {
  View,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Input, Button, Text } from './styles'

import { getAllCharactersByNameStartsWith } from '../../api/business'
import { Context } from '../../context'

export default function () {
  const [search, setSearch] = useState('')
  const { setResult, setHeroes, state, heroes } = useContext(Context)

  useEffect(() => {
    if (search !== '') {
      console.log(state.page * 4)
      getAllCharactersByNameStartsWith(search, state.page * 4, results => {
        setResult(results)
        setHeroes(results)
      })
    }
  }, [state.page])

  return (
    <View>
      <Input
        placeholder='Digite o nome do seu herói'
        value={search}
        onChangeText={search => setSearch(search)}
      />
      <Button
        onPress={() => {
          getAllCharactersByNameStartsWith(search, state.page * 4, results => {
            setResult(results)
            setHeroes(results)
          })
        }}
      >
        <LinearGradient colors={["#6F93A1","#4B6B78","#374047","#181D23", "#020202"]}
          start={{x:0, y:0.5}}
          end={{x:1,y:0.5}}
          style={{
            width: '100%',
            height: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}  >
          <Text >P   R   O   C   U   R   A   R</Text>
        </LinearGradient>
      </Button>
    </View>
  )
}