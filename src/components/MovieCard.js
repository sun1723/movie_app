import React from 'react';
import { Grid } from '@material-ui/core';

export const MovieCard = ({movie}) => {
  return (
    <Grid container spacing={2} >
        <Grid item xs={1} >
          <img src={movie.Poster} style={{height: '80px', width:'80px', objectFit: 'fill'}}/>
        </Grid>
        <Grid item xs={11}>
          <div>{movie.Title}</div>
          <div>{movie.Year}</div>
        </Grid>
    </Grid>
  )
}