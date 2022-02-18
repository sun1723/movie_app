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

  return (
    <Grid container spacing={2} 
      id = {index}
      key = {movie.imdbID}
      style={{ width: '100%', backgroundColor: (hoverIndex === index) || (onClickIndex == index)? '#1B9CB3': '#195A66', height: '150px', marginBottom: '15px'}}
      onMouseEnter={evt => {evt.persist();  setHoverIndex(evt.currentTarget.id)}}
      onMouseLeave={evt => setHoverIndex(null)}
      onClick={evt => { setOnClickId(movie.imdbID); }}>
        <Grid item xs={3} style={{ padding: 0, justifyContent: 'center', height: '100%'}}>
          <img src={movie.Poster != 'N/A' ? movie.Poster : "./Image_not_available.png"} style={{height: '100%', width:'100%', objectFit: 'fill',boxSizing:'border-box'}}/>
        </Grid>
        <Grid item xs={9} style={{fontSize: '1em', alignSelf: 'center'}}>
          <div>{movie.Title}</div>
          <div style={{marginTop:'5px'}}>{movie.Year}</div>
        </Grid>
    </Grid>
  )
}