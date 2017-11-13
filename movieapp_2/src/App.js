import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'; //다른 js 불러오기 (자식 컴포넌트 )

class App extends Component {

  //기본값 state
  state = {
  
  };


  componentDidMount(){
      this._getMovies();
  };

  //영화정보 출력 함수
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      //console.log(movie)
      return  <Movie 
        title={movie.title}
        poster={movie.large_cover_image}
        genres={movie.genres}
        rating={movie.rating}
        synopsis={movie.synopsis}
        key={movie.id} />;
  });
  return movies;
  };

 _getMovies = async () => { //비동기 함수
  const  movies  = await this._callApi()
  /* callapi가 작업이 수행되기 (완료가 아님) 전에는 실행되지 않음 */
  this.setState({
     movies
  })
  /* callapi가 작업이 수행되기 (완료가 아님) 전에는 실행되지 않음 */
}

_callApi= () => {
      /*영화 url 불러오기
        promise 
        fetch를 사용하여 (비동기) 구현( 여러개를 불러올때 느리거나 문제가 있어도 다음것을 실행함 )
        .then으로 그 다음동작을 수행
        catch로 에러를 잡아낸다
      */  
    return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=year')
    .then(result => result.json() ) //결과를 json형태(객체)로 불러옴 
    .then(json => json.data.movies)
    .catch(err => console.log(err));
}

  /* 불러올 리스트가 있으면 _renderMovies를 실행, 그 전에는 로딩중 을 띄움 */
    render() {
      return (
        <article className="App">
          {this.state.movies ? this._renderMovies() : <p className="loading">로딩중...</p>} 
        </article>
      );
    };
};

export default App;
