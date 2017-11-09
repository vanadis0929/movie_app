import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'; //다른 js 불러오기 (자식 컴포넌트 )

class App extends Component {

//기본값 state
state = {
 //greeting: '안녕하세요?',
  movies: [
    {
      title: "하울의 움직이는 성",
      poster: "http://www1.codewiz.kr/asset/www/pangpang/images/chatimg/gold_31G.png"
    },
    {
      title: "스타워즈",
      poster: "http://www1.codewiz.kr/asset/www/pangpang/images/chatimg/gold_12486G_1.png"
    }
  ]
}

//3초후에 메시지 바뀜
componentDidMount(){
  setTimeout(() => {
    this.setState({
      //greeting: "무지무지 반가워요"
        movies: [
          ...this.state.movies, //이 줄이 없으면 추가되지 않고 기존것을 대체함
          {
            title: '해리포터',  
            poster: 'http://www1.codewiz.kr/asset/www/pangpang/images/chatimg/gold_1004G_1.png'
          }
        ]
      })
    },3000);
}

  render() {
    return (
      <article className="App">
          {this.state.greeting}
          {this.state.movies.map((movie, index) => {
             return  <Movie title={movie.title} poster={movie.poster} key={index} />
          })}
          
      </article>
    );
  }
}

export default App;

//컴포넌트 정보
//App : 무비리스트 
//movie : 각각의 무비 아이템
//moviePoster = 각각의 movie에 들어가는 포스터 이미지

//부모 컴포넌트가 자식 컴포넌트에게 정보를 주는수단 : props 

/*
array map : 다른 array들의 엘리먼트를 포함한 새로운 array를 생성 (대상의 갯수만큼 반복)
{movies.map(movie => {
  return  <Movie title={movie.title} poster={movie.poster} />
})}

엘리먼트는 고유한 key 값을 가져야함
          {movies.map((movie, index) => {
             return  <Movie title={movie.title} poster={movie.poster} key={index} />
          })}



// render 사이클 순서 (컴포넌트가 존재할때, 순서대로  )
          componentWillMount();
          render()
          componentDidMount();

//update 순서          
          componentWillReceiveProps()
          shouldComponentUpdate()
          componentWillUpdate()  이전 props 와 현재 props를 비교해서 다르면 true반환
          render()
          componentDidUpdate()



state 
state가 바뀔때 render가 발생
state를 변경 하려할때는 직접적으로 하지 않고 setState()를 사용하여 변경




*/