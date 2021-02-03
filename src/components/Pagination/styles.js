import React from 'react'
import styles from 'styled-components/native'

const Container = styles.View`
  width: 96%;
  height: 50px;
  border-color: #dddddd;
  border-width: 1px;
  margin-horizontal: 10px;
  margin-bottom: 10px;
  margin-left: 2%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color:#fff;
  border-radius:5px;
`

const Box = styles.TouchableOpacity`
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-color: #ddd;
  border-width: 1px;
  background-color: ${props=>props.backgroundColor ? props.backgroundColor : '#fff' };
`
const PageNumber = styles.Text`
  color: ${props=>props.color ? props.color : '#000'};
  font-family: JetBrainsMono-VariableFont;
`

export {
  Container,
  Box,
  PageNumber
}