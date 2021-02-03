import React, { useContext } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Context } from '../../context'
import { Container, Box, PageNumber } from './styles'

export default function ({ }) {
  const { state, setPage } = useContext(Context)

  return (
    <Container
    >
      {
        state.page > 2 && state.pages.length > 0 ?
          <Box
            onPress={() => setPage(state.page > 1 ? state.page - 1 : state.page)}
          >
            <MaterialIcons name='keyboard-arrow-left' size={20} color='#aaa' />
          </Box>
          : null
      }
      {
        state.pages.map((item, index) => {
          if (index + 1 >= state.page ? index + 1 - state.page <= 2 : state.page - index - 1 <= 2) {
            return (
              <Box key={`${item}`}
                backgroundColor={state.page === item ? '#6B0C1D' : '#fff'}
                onPress={() => setPage(item)}
              >
                <PageNumber color={state.page === item ? '#fff' : '#000'} >{item + 1}</PageNumber>
              </Box>
            )
          } else {
            return null
          }
        })
      }
      {
        state.page < state.pages.length - 2 && state.pages.length > 0 ?
          <Box
            onPress={() => setPage(state.page < state.pages.length - 1 ? state.page + 1 : state.page)}
          >

            <MaterialIcons name='keyboard-arrow-right' size={20} color='#aaa' />
          </Box>
          : null
      }
    </Container>
  )
}