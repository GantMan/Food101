/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {StyleSheet, Text, View, SafeAreaView} from 'react-native'
import {
  RNVCameraView,
  RNVisionProvider,
  RNVisionConsumer,
  RNVCameraRegion,
  calculateRectangles,
  RNVCameraConsumer
} from "react-native-vision"

export default class App extends Component {
  render() {
    return (
      <RNVisionProvider
        isCameraFront={false}
        isStarted={true}
        interval={2000}
      >
        <SafeAreaView style={styles.container}>
          <Text style={styles.welcome}>Food 101</Text>
            <View>
              <Text>Starting Camera View</Text>
              <RNVCameraView
                gravity="full"
                style={styles.camera}
              >

              </RNVCameraView>
            </View>
        </SafeAreaView>
      </RNVisionProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  camera: {
    textAlign: 'center',
    backgroundColor: "#333",
    height: "50%",
    width: "50%",
    overflow: "hidden",
    marginBottom: 5,
  },
})
