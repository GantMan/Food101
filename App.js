/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react"
import { StyleSheet, Text, SafeAreaView, View } from "react-native"
import { FaceCamera } from "react-native-vision";
import { Identifier } from "react-native-identifier";

export default () =>
 (
  <SafeAreaView style={styles.container}>
    <Text style={styles.welcome}>Food 101</Text>
    <Text style={styles.explainer}>Point the camera at some food!</Text>
    <FaceCamera style={{ flex: 1 }} classifier="MegaNic50">
    {({ face, faceConfidence, style }) =>
      face &&
      (face == "nic" ? (
        <Identifier style={{ ...style }} accuracy={faceConfidence} />
      ) : null)
    }
  </FaceCamera>
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
