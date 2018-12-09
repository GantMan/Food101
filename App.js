/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react"
import { StyleSheet, Text, SafeAreaView } from "react-native"
import { VisionCamera } from "react-native-vision"

export default () =>
 (
  <SafeAreaView style={styles.container}>
    <Text style={styles.welcome}>Food 101</Text>
    <Text style={styles.explainer}>Point the camera at some food!</Text>
    <VisionCamera style={styles.camera} classifier="Food101">
      {({ label, confidence }) => (
        <Text style={styles.foodBlock}>
          {label + " :" + (confidence * 100).toFixed(0) + "%"}
        </Text>
      )}
    </VisionCamera>
  </SafeAreaView>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  explainer: {
    alignSelf: "stretch",
    textAlign: "center",
    width: "100%",
  },
  foodBlock: {
    padding: 20,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#333",
    color: "#ccc",
  },
  camera: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#fee",
    backgroundColor: "#111",
    overflow: "hidden",
  }
})
