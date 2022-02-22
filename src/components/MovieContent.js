import { useState } from "react";
import { Grid } from '@material-ui/core';
import '../utils/movie_content.scss'
import {MovieTag} from './MovieTag';
import { MovieMore } from "./MovieMore";

export const MovieContent = ({movie}) => {

  return (
    <>
    { movie &&
      <div className="movie-content"  >
        <div className="movie-content_background">
          <img src={movie && movie.Poster != 'N/A' ? movie.Poster : "./Image_not_available.png"} />
        </div>
        <Grid className="movie-content_container" container item xs={12} >
          <Grid item  sm={5}  className="movie-content_container__mainPoster" >
            <img style={{width: '80%', height: '50vh', objectFit: 'contain' }} src={movie && movie.Poster != 'N/A' ? movie.Poster : "./Image_not_available.png"} />
          </Grid>
          <div  className="movie-content_right">
            <div className="movie-content__movieTitle">{movie && movie.Title ? movie.Title : ''}</div>
            <div className="movie-content_tagList">
              {/* <MovieTag 
                content={movie.Year}
                isSeperate={true}
              /> */}
              <MovieTag
                content={movie.Genre}
              />
              {/* <MovieTag
                content={movie.Language}
              /> */}
              <MovieTag
                content={movie.Runtime}
              />
            </div>
            <div className='movie-content_movieMore'>
              <MovieMore movie={movie}/>
            </div>
          </div>
        </Grid>
        <div  className="scoreList">
        {movie.Ratings && movie.Ratings.length > 0 &&
          movie.Ratings.map(rate => 
            <div >
              <div>value: {rate.Value}</div>
              <div>source: {rate.Source}</div>
            </div>
          )
        }
        </div>
      </div>
    }
    </>
  );
}