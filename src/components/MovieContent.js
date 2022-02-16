import { useState } from "react";
import { Grid } from '@material-ui/core';

export const MovieContent = ({movie}) => {

  return (
    <>
    {console.log(movie)}
    { movie &&
    <>
    <Grid container direction="column">
      <Grid container item xs={12} >
        <Grid item xs={5} >
          <img style={{width: '250px', height: '300px', objectFit: 'fill' }} src={movie && movie.Poster != 'N/A' ? movie.Poster : "./Image_not_available.png"} />
        </Grid>
        <Grid item xs={7} >
          <h3>{movie && movie.Title ? movie.Title : ''}</h3>
          <div><span>{movie.Year ? movie.Year: ''}</span> <span>{movie.Genre}</span> <span>{movie.Language}</span> <span>{movie.Runtime ? movie.Runtime : '' }</span></div>
          <div>{movie.Actors}</div>
          <div>Country: {movie.Country}</div>
          <div>Release Date: {movie.Released}</div>
          <div>Rating: {movie.imdbRating ? movie.imdbRating : '' }</div>
          <div>Vote: {movie.imdbVotes ? movie.imdbVotes : '' }</div>
          <div>writer: {movie.Writer}</div>
          <div>score: {movie.Metascore}</div>
          <div>Director: {movie.Director}</div>
        </Grid>
      </Grid>
      -------------------------
      <Grid item xs={12}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Grid>
      <Grid container item xs={12} direction="row">
      {movie.Ratings.length > 0 &&
        movie.Ratings.map(rate => 
          <div style={{justifyContent: 'space-around'}}>
            <div>value: {rate.Value}</div>
            <div>source: {rate.Source}</div>
          </div>
        )
      }
      </Grid>
      </Grid>
    </>
    }
    </>
  );
}