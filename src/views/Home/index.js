import React, { } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  ImageBackground
} from 'react-native'
import HeroList from '../../components/HeroList'
import Pagination from '../../components/Pagination'
import SearchForm from '../../components/SearchForm'

export default function ({ navigation }) {
  return (
    <View
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require('../../assets/images/background.jpg')}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
        }}
      >
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }} >

          <View
            style={{
              width: '100%',
              marginTop: 20
            }}
          >
            <SearchForm />
          </View>

          <HeroList navigation={navigation} />

          <Pagination />
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}