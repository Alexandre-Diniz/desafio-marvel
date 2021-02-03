import React from 'react'
import styles from 'styled-components/native'

const StyledView = styles.TouchableOpacity`
  background-color:#ffffff;
  width: 90%;
  margin-top: 10px;
  border-radius: 10px;
  padding-vertical:10px;
  border-width: 1px;
  border-color: #dddddd;
  margin-left: 5%;
  justify-content: center;
  align-items: center;
`;

const StyledText = styles.Text`
  color: #000000;
  font-family: JetBrainsMono-VariableFont;
`

const StyledImage = styles.Image`
  width: 70px;
  height: 70px;
  borderRadius: 70px;
  overflow: hidden;
`

export {
  StyledView,
  StyledText,
  StyledImage
}