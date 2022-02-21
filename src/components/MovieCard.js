import React, {useState, useEffect} from 'react';
import { Grid } from '@material-ui/core';
import '../utils/movie_card.scss'
export const MovieCard = ({movie,index,fetchMovieById, onClickIndex}) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [onClickId, setOnClickId] = useState("");

  useEffect(() => {
    console.log(onClickId)
    if(onClickId)
    {
      fetchMovieById(onClickId,index);
      setOnClickId('')
    }   
  },[onClickId])

  useEffect (() => {
    console.log(hoverIndex,index);
  },[hoverIndex])

  return (
    <div 
      id = {index}
      key = {movie.imdbID}
      className='movie-card'
      // style={{backgroundImage: movie.Poster != 'N/A' ? `url(${movie.Poster})` : "url(./Image_not_available.png)" }}
      onMouseEnter={evt => {evt.persist(); setHoverIndex(evt.currentTarget.id)}}
      onMouseLeave={evt => setHoverIndex(null)}
      onClick={evt => {setOnClickId(movie.imdbID); }}>
        <div className="movie-card_left"><img src={movie.Poster != 'N/A' ? movie.Poster : "./Image_not_available.png"} /></div>
        <div  className={onClickIndex==index ? 'movie-card_right active' :  ' movie-card_right '}>
          <div className='movie-card_right__title'>{movie.Title}</div>
          <div className='movie-card_right__info'>{movie.Year}</div>
        </div>
    </div>
  )
}