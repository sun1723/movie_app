import React, {useState, useEffect} from 'react';
import { Grid } from '@material-ui/core';

export const MovieCard = ({movie,index,fetchMovieById, onClickIndex}) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [onClickId, setOnClickId] = useState("")

  useEffect(() => {
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
    <Grid container spacing={2} 
      id = {index}
      key = {movie.imdbID}
      style={{ width: '100%', backgroundColor: (hoverIndex == index) || (onClickIndex == index)? '#0F0C24': '#fff', height: '100px', marginBottom: '12px', borderRadius: '8px'}}
      onMouseEnter={evt => {evt.persist(); setHoverIndex(evt.currentTarget.id)}}
      onMouseLeave={evt => setHoverIndex(null)}
      onClick={evt => { setOnClickId(movie.imdbID); }}>
        <Grid item xs={3} style={{ padding: 0, justifyContent: 'center', height: '100%'}}>
          <img src={movie.Poster != 'N/A' ? movie.Poster : "./Image_not_available.png"} style={{height: '100%', width:'100%', objectFit: 'fill',boxSizing:'border-box', borderRadius: '5px'}}/>
        </Grid>
        <Grid item xs={9} style={{ color: (hoverIndex == index) || (onClickIndex == index) ? '#fff' : '#000'}}>
          <div style={{fontSize: '1.1em', lineHeight:'1.5rem', marginBottom: '2px'}}>{movie.Title}</div>
          <div style={{ color: (hoverIndex == index) || (onClickIndex == index) ? '#000' : '#fff', backgroundColor:(hoverIndex == index) || (onClickIndex == index) ? '#D6D6D6': '#7A7F87' , width: '70px', textAlign: 'center', borderRadius: '12px', paddingTop: '2px' }}>{movie.Year}</div>
        </Grid>
    </Grid>
  )
}