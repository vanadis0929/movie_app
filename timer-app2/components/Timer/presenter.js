import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Button from "../Button";

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  time -= minutes * 60;

  var seconds = parseInt(time % 60, 10);

  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  return;
}

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    console.log(
      `currentprops: ${currentProps.isPlaying} newProps: ${nextProps.isPlaying}`
    );
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        timerInterval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.timerInterval);
    }
  }

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
          <Text style={styles.time}>
            {formatTime(timerDuration - elapsedTime)}
          </Text>
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
