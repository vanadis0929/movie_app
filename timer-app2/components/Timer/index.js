import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Button from "../Button";

class Timer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}> 25:00 </Text>
        </View>
        <View style={styles.lower}>
          <Button iconName="play-circle-o" />
          <Button iconName="stop-circle-o" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fd0",
    alignItems: "center",
    justifyContent: "center"
  },
  upper: {
    marginBottom: 50
  },
  lower: {},
  time: {
    color: "#fff",
    fontSize: 120
  }
});

export default Timer;
