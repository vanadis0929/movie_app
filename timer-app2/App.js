import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upper}>
          <Text style={styles.time}>30:00</Text>
        </View>
        <View style={styles.lower}>
          <Text>버튼이 여기에</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
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
