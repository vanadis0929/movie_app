import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar
} from "react-native";
import Weather from "./Weather";

const APPKEY = "3f9404e51a676528522e910eefbc4158";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };

  componentDidMount() {
    //현재위치 정보를 불러온다. 위치정보를 정상적으로 수신시에 isLoaded를 true로 바꿈.
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
        //console.log(position)
      },
      error => {
        //에러발생시 error state를 변경하여 에러 메시지등을 표시
        this.setState({
          error: error
        });
      }
    );
  }

  _getWeather = (lat, long) => {
    fetch(
      //왜 얘만 ` 로 감싸줘야함 -_-?...
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${APPKEY}`
    )
      .then(response => response.json())
      .then(json => {
        //날씨코드와 온도를 가져옴
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true
        });
        console.log(json);
      });
  };

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        {/* 상태바를 import 해서 숨김 */}
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather weatherName={name} temp={Math.ceil(temperature - 273.15)} />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>날씨정보 불러오는중...</Text>
            {error ? (
              <Text style={styles.errorText}>
                위치 값을 받아오지 못하였습니다. 폰의 GPS설정을 확인해주세요.
              </Text>
            ) : null}
          </View>
        )}
      </View>
    );
  }
}

//글자관련 속성은 <text></text>에서만 먹는다 안그러면 에러남 ㅇㅅㅇ
//style은 단축속성 적용되지 않음.
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#fdf6aa"
  },
  loadingText: {
    fontSize: 35,
    textAlign: "center",
    paddingBottom: 100
  },
  errorText: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 50
  }
});
