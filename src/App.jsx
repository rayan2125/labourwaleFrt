import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OnBoarding from './screens/onBoarding'


const App = () => {
  return (
    <View style={{flex:1}}>
      <Text>App</Text>
      <OnBoarding/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})