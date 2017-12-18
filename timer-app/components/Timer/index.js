import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

class Timer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>00:00</Text>
        </View>
        <View style={styles.lower}>
          <Text>buttons 여기에</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ed1233"
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: { color: "#fff", fontSize: 130, fontWeight: "100" }
});

export default Timer;
