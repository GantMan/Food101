/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"
import fetchModel from "./fetchModel"
import { VisionCamera } from "react-native-vision"

let downloadedModel

export default class App extends Component {
  state = {
    classifier: null,
  }

  componentDidMount() {
    // switch to async/await style
    ;(async () => {
      downloadedModel = await fetchModel("Food101")
      this.setState({ classifier: downloadedModel })
    })()
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Food 101</Text>
        <Text style={styles.explainer}>Point the camera at some food!</Text>
        <VisionCamera style={{ flex: 1 }} classifier={this.state.classifier}>
          {() => <Text style={{ fontSize: 20, position: "absolute" }}>hi</Text>}
        </VisionCamera>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
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
  },
  cameraContainer: {
    height: "80%",
  },
})
