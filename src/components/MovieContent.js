import { useState } from "react";
import { Grid } from '@material-ui/core';
import '../utils/movie_content.scss'
import {MovieTag} from './MovieTag';
import { MovieMore } from "./MovieMore";
import CloseIcon from '@material-ui/icons/Close';

export const MovieContent = ({movie, handleClose, onTabletMode}) => {

  return (
    <>
    { movie &&
      <div className="movie-content"  >
        {onTabletMode &&
          <div style={{color: '#fff', float:'right', cursor: 'pointer', height: '2%'}} onClick={() => handleClose()}><CloseIcon /></div>
        }
        <div className="movie-content_background">
          <img src={movie && movie.Poster != 'N/A' ? movie.Poster : "./Image_not_available.png"} alt={movie && movie.Title ? movie.Title : ''}/>
        </div>
        <div className="movie-content_container"  style={{height: onTabletMode ? "98%" : '100%'}} >
          <div className="movie-content_container__mainPoster" >
            <img src={movie && movie.Poster != 'N/A' ? movie.Poster : "./Image_not_available.png"} alt={movie && movie.Title ? movie.Title : ''}/>
          </div>
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
        {/* <div  className="scoreList">
        {movie.Ratings && movie.Ratings.length > 0 &&
          movie.Ratings.map(rate => 
            <div >
              <div>value: {rate.Value}</div>
              <div>source: {rate.Source}</div>
            </div>
          )
        }
        </div> */}
      </div>
    }
    </>
  );
}