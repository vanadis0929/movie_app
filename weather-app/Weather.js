import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo"; //배경그라디언트
import { Ionicons } from "@expo/vector-icons"; //날씨아이콘  (vector-icons 라는 패키지에서 가져옴)
import PropTypes form "prop-types";

//날씨 컴포넌트
export default class Weather extends Component {
  render() {
    return (
      <LinearGradient colors={["#6db3f2", "#1e69de"]} style={styles.container}>
        <View style={styles.upper}>
          {/* 날씨아이콘 불러옴 */}
          <Ionicons color="white" size={144} name="ios-rainy" />
          <Text style={styles.temp}>{temp}℃</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>title</Text>
          <Text style={styles.subtitle}>msg</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  lower: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 35,
    backgroundColor: "transparent"
  },
  wIcon: {
    //textShadowColor: '#000',
    //textShadowOffset: {width: 1, height: 1},
    //textShadowRadius: 3
  },
  title: {
    fontSize: 35,
    color: "#ffffff",
    backgroundColor: "transparent",
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 30,
    color: "#ffffff",
    backgroundColor: "transparent",
    fontWeight: "300"
  },
  temp: {
    marginTop: 10,
    fontSize: 40,
    color: "#ffffff",
    backgroundColor: "transparent",
    fontWeight: "300"
  }
});
