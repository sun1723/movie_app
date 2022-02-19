import { useState } from "react";
import { Grid } from '@material-ui/core';

export const MovieContent = ({movie,hideDetail}) => {

  return (
    <>
    { movie &&
    <>
    <Grid container direction="column" style={{padding: '0 15px', width: '80%', margin: 'auto auto' }}>
      <Grid container item xs={12} >
        <Grid item xs={hideDetail ? 12 : 5} style={{textAlign:'center'}}>
          <img style={{width: '80%', height: '50vh', objectFit: 'contain' }} src={movie && movie.Poster != 'N/A' ? movie.Poster : "./Image_not_available.png"} />
        </Grid>
        <Grid item xs={7} className="movie_right">
          <div className="title">{movie && movie.Title ? movie.Title : ''}</div>
          <div style={{lineHeight:'2em'}}>
            <div><span>{movie.Year ? movie.Year: ''}</span> <span>{movie.Genre}</span> <span>{movie.Language}</span> <span>{movie.Runtime ? movie.Runtime : '' }</span></div>
            <div>{movie.Actors}</div>
            <div>Country: {movie.Country}</div>
            <div>Release Date: {movie.Released}</div>
            <div>Rating: {movie.imdbRating ? movie.imdbRating : '' }</div>
            <div>Vote: {movie.imdbVotes ? movie.imdbVotes : '' }</div>
            <div>writer: {movie.Writer}</div>
            <div>score: {movie.Metascore}</div>
            <div>Director: {movie.Director}</div>
          </div>
        </Grid>
      </Grid>
      <Grid className="movie_p" item xs={12} style={{lineHeight: '2em', fontSize: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Grid>
      <Grid  className="scoreList" container item xs={12} direction="row" style={{marginTop: '30px'}}>
      {movie.Ratings && movie.Ratings.length > 0 &&
        movie.Ratings.map(rate => 
          <div >
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