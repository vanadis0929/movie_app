import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Button from "../Button";

class Timer extends Component {
  render() {
    console.log(this.props);
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer
    } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>00:00</Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying && (
            <Button iconName="play-circle-o" onPress={startTimer} />
          )}
          {isPlaying && (
            <Button iconName="stop-circle-o" onPress={restartTimer} />
          )}
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
