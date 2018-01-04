import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Button from "../Button";

class Timer extends Component {
  render() {
    console.log(this.props);
    const { isPlaying, elaspedTime, timerDuration } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}> 25:00 </Text>
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
