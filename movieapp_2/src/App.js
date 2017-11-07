import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'; //다른 js 불러오기 (자식 컴포넌트 )

const movieTitle = [  "하울의 움직이는 성",  "스타워즈" ];

const moviePoster = [  
  "http://www1.codewiz.kr/asset/www/pangpang/images/chatimg/gold_31G.png", 
  "http://www1.codewiz.kr/asset/www/pangpang/images/chatimg/gold_12486G_1.png" ];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitle[0]} poster={moviePoster[0]} />
        <Movie title={movieTitle[1]} poster={moviePoster[1]} />

  
      </div>
    );
  }
}

export default App;


//App : 무비리스트 
//movie : 각각의 무비 아이템
//moviePoster = 각각의 movie에 들어가는 포스터 이미지

//부모 컴포넌트가 자식 컴포넌트에게 정보를 주는수단 : props