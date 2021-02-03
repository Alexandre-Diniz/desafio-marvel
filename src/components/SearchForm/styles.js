import React from 'react'
import styles from 'styled-components/native'

const Input = styles.TextInput`
  width: 90%;
  height: 50px;
  border-radius: 50px;
  border-width: 1px;
  border-color: #6F93A1;
  padding-left: 20px;
  margin-left: 5%;
  background-color: #fff;
  font-family:JetBrainsMono-VariableFont;
  color: #374047
`

const Button = styles.TouchableOpacity`
  margin-top:10px;
  width: 90%;
  height: 50px;
  border-radius: 50px;
  border-width: 1px;
  border-color: #4B6B78;
  margin-left: 5%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

const Text = styles.Text`
  color:#fff;
  font-family:Marvel Regular;
  font-size:20px;
`

export {
  Input,
  Button,
  Text
}