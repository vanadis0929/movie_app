import React, { Component } from 'react';
import './App.css';

class Movie extends Component {
  render() {
        console.log(this.props)
    return (
        <div>
            <h1>{this.props.title}</h1>
            <Poster poster={this.props.poster}   />
            
         </div>
    );
  }
}

class Poster extends Component{
    render(){
        return(
            <p><img src={this.props.poster} alt="" /></p>
        )
    }
}

export default Movie;




//App : 무비리스트 
//movie : 각각의 무비 아이템
//moviePoster = 각각의 movie에 들어가는 포스터 이미지

//부모 컴포넌트가 자식 컴포넌트에게 정보를 주는수단 : props

//컴포넌트는 반드시 render를 해야함