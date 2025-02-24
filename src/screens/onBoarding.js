import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const OnBoarding = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ flex: 1 }}>WelCome To LabourWale</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ backgroundColor: 'red', height: 40, width: 50 }}>

                </View>
                <View style={{ backgroundColor: 'green', height: 40, width: 50 }}>

                </View>
            </View>
            
        </View>
    )
}

export default OnBoarding

const styles = StyleSheet.create({})