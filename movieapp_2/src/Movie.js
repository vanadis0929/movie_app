import React from 'react';
import PropTypes from 'prop-types';
import './App.css';


    /*
        proptypes 
        부모컴포넌트나 api에서 오는 정보들에 대하여 그 정보가 어떤타입인지 (string, number 등), 있는지 없는지를 검증
        
        isRequired -> 필수값 (반드시 받아야하는 정보, 설정해놓고 정보가 없으면 에러출력)
        예: 이미지를 필수값으로 받아와야하는데 만약 없다면 디폴트 이미지를 대체출력하는 기능
    */



function Movie({title, poster, genres, synopsis, rating}){
    return(
        <section className="movie">
            <h1>{title}</h1>
            <div className="thum"><MoviePoster poster={poster}   /></div>
            <div className="movie_details">
                {genres.map((genre, index) => <MovieGenre genres={genre} key={index} />)}
            </div>
        </section>
    )
}

Movie.propTypes = {
   title: PropTypes.string.isRequired,
   poster: PropTypes.string.isRequired,
   genres: PropTypes.array.isRequired,
   rating: PropTypes.number.isRequired,
   synopsis: PropTypes.string.isRequired

}


/*
class Poster extends Component{
    render(){
        return(
            <p><img src={this.props.poster} alt="" /></p>
        )
    }
}*/

/* 라이프사이클, render가 필요없는 컴포넌트는 함수형으로 바꿔서 사용 */
function MoviePoster({poster, title}){
    return(
        <p><img src={poster} alt={title} /></p>
    )
}

MoviePoster.propTypes = {
        poster: PropTypes.string.isRequired
 }

 function MovieGenre({genres}){
    return(
        <span className="movie_genres">{genres}</span>
    )
}

MoviePoster.propTypes = {
        poster: PropTypes.string.isRequired
 }

export default Movie;


/*

//App : 무비리스트 
//movie : 각각의 무비 아이템
//moviePoster = 각각의 movie에 들어가는 포스터 이미지

//부모 컴포넌트가 자식 컴포넌트에게 정보를 주는수단 : props (this.props.속성명)

//컴포넌트는 반드시 render를 해야함.
// 

똑똑한 컴포넌트 (compornent)
state를 가짐,
라이프사이클을 가짐

멍청한 컴포넌트 (함수형)
return만을 가짐

*/