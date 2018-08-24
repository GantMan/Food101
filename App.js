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
let downloadedModel

export default class App extends Component {
  state = {
    classifiers: null
  }

  componentDidMount() {
    // switch to async/await style
    (async () => {
      downloadedModel = await fetchModel("Food101")
      this.setState({ classifiers: [downloadedModel] })
    })()
  }

  render() {
    return (
      <RNVisionProvider
        isCameraFront={false}
        // classifier={this.state.classifier}
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
                      <RNVCameraRegion
                        key={"bigPicture"}
                        fromeDisposition="file"
                        region={""}
                        classifiers={
                          this.state.classifiers &&
                          this.state.classifiers.map(url => {
                            // automatically top confidence ordered
                            return { url: url, max: 5 };
                          })
                        }
                      >
                          {regionInfo => {
                            return <View
                              style={{
                                width: 400,
                                height: 500,
                                position: 'absolute',
                                borderColor: 'blue',
                                borderWidth: 5
                              }}
                            >
                              <Text>{regionInfo.classifications[downloadedModel] && regionInfo.classifications[downloadedModel][0].label}</Text>
                            </View>
                          }}
                      </RNVCameraRegion>
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
