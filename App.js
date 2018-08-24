/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {StyleSheet, Text, View, SafeAreaView} from 'react-native'
import fetchModel from "./fetchModel"
import {
  RNVCameraView,
  RNVisionProvider,
  RNVisionConsumer,
  RNVCameraRegion,
  calculateRectangles,
  RNVCameraConsumer
} from "react-native-vision"

export default class App extends Component {
  state = {
    classifier: null
  }

  componentDidMount() {
    // switch to async/await style
    (async () => {
      downloadedModel = await fetchModel("Food101")
      this.setState({ classifier: downloadedModel })
    })()
  }

  render() {
    return (
      <RNVisionProvider
        isCameraFront={false}
        isStarted={true}
      >
        <SafeAreaView style={styles.container}>
          <Text style={styles.welcome}>Food 101</Text>
            <Text style={styles.explainer}>Point the camera at some food!</Text>
            <View style={styles.cameraContainer}>
              <RNVCameraView
                gravity="fill"
                style={styles.camera}
              >
                { data => {
                  // window.alert(data.regions && JSON.stringify(data.regions))
                  return data.regions
                  ? [
                    // ...Object.keys(data.regions)
                    //   .filter(k => {
                    //     return k != "";
                    //   })
                    //   .map(k => {
                    //     return (
                          <RNVCameraRegion
                            key={"bigPicture"}
                            fromeDisposition="file"
                            region={""}
                            classifiers={this.state.classifier}
                            >
                              {regionInfo => {
                                return <Text>hi</Text>
                              }}
                          </RNVCameraRegion>
                      //   )
                      // })
                  ]
                  : null
                }}
              </RNVCameraView>
            </View>
            <Text style={styles.foodBlock}>No Food</Text>
        </SafeAreaView>
      </RNVisionProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  explainer: {
    alignSelf: "stretch",
    textAlign: 'center',
    width: "100%"
  },
  foodBlock: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#ccc'
  },
  camera: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#fee',
    backgroundColor: "#111",
    overflow: "hidden",
  },
  cameraContainer: {
    height: "80%"
  }
})
