import "../utils/movie_content.scss";
import { MovieTag } from "./MovieTag";
import { MovieMore } from "./MovieMore";
import CloseIcon from "@material-ui/icons/Close";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { StarRating } from "./StarRating";
import { ScoreList } from "./ScoreList";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { useEffect, useState } from "react";

export const MovieContent = ({ movie, handleClose, onTabletMode, handleAddSaved,savedMap }) => {
  const [isSaved, setIsSaved] = useState(false);
  
  useEffect(() => {
    checkSaved();
  },[movie,isSaved])

  /**
   * checkSaved: check movie is saved or not
   */
  const checkSaved = () => {
    if(movie && savedMap[movie.imdbID]){
      //exist
      setIsSaved(true);
    }else{
      setIsSaved(false)
    }
  }

  return (
    <>
      {movie && (
        <div className="movie-content">
          {onTabletMode && (
            <div
              style={{
                color: "#fff",
                float: "right",
                cursor: "pointer",
                height: "2%",
              }}
              onClick={() => handleClose()}
            >
              <CloseIcon />
            </div>
          )}
          <div className="movie-content_background">
            <img
              src={
                movie && movie.Poster != "N/A"
                  ? movie.Poster
                  : "./Image_not_available.png"
              }
              alt={movie && movie.Title ? movie.Title : ""}
            />
          </div>
          <div className="movie-content_container">
            <div className="movie-content_container__saved">
              <BookmarkIcon fontSize="large" className={isSaved ? "movie-content_container__saved___icon active" : "movie-content_container__saved_icon"} onClick={(evt) => {handleAddSaved(movie); checkSaved()}}/>
            </div>
            <div className="movie-content_container__mainPoster">
              <img
                src={
                  movie && movie.Poster != "N/A"
                    ? movie.Poster
                    : "./Image_not_available.png"
                }
                alt={movie && movie.Title ? movie.Title : ""}
              />
            </div>
            <div className="movie-content__movieTitle">
              {movie && movie.Title ? movie.Title : ""}
            </div>
            <div className="movie-content_movieInfo">
              <span>
                <StarRating rate={movie.imdbRating ? movie.imdbRating : 0} />
              </span>
              <span>
                <WhatshotIcon className="icon" />
              </span>
              <span className="vote">
                {movie.imdbVotes != "N/A" ? movie.imdbVotes : 0}
              </span>
            </div>
            <div className="movie-content_tagList">
              <MovieTag content={movie.Genre} />
              <MovieTag content={movie.Runtime} />
            </div>
            <div className="movie-content_movieMore">
              <MovieMore movie={movie} />
            </div>
            {movie.Ratings && movie.Ratings.length > 0 &&
              <div className="movie-content_scoreList">
                <ScoreList movie={movie} />
              </div>
            }
          </div>
        </div>
      )}
    </>
  );
};
