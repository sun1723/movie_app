import React, { useState, useEffect } from "react";
import "../utils/movie_card.scss";
import { MovieContent } from "./MovieContent";
import WhatshotIcon from '@material-ui/icons/Whatshot';

export const MovieCard = ({
  movie,
  index,
  fetchMovieById,
  onClickIndex,
  movieContent,
  isOpen,
  onPhoneMode,
  onTabletMode,
  handleOpenDetail,
}) => {
  const [onClickId, setOnClickId] = useState("");

  useEffect(() => {
    if (onClickId) {
      fetchMovieById(onClickId, index);
      setOnClickId("");
    }
  }, [onClickId]);

  useEffect(() => {
    if (isOpen && onClickIndex != index) {
      handleOpenDetail(true);
    }
  }, [onClickIndex]);

  const imgError = (image) => {
    console.log(`Can Not Load Image from ${image.src} `);
    image.onerror = "";
    image.src = "./Image_not_available.png";
    return true;
  };

  return (
    <div
      id={index}
      key={movie.imdbID}
      className="movie-card"
      onClick={(evt) => {
        setOnClickId(movie.imdbID);
      }}
    >
      <div className="movie-card_left">
        <img
          src={
            movie.Poster != "N/A" ? movie.Poster : "./Image_not_available.png"
          }
          onError={(evt) => imgError(evt.currentTarget)}
        />
      </div>
      <div
        className={
          onClickIndex == index
            ? "movie-card_right active"
            : " movie-card_right "
        }
      >
        <div className="movie-card_right__title">{movie.Title}</div>
        {movie.Episode && movie.imdbRating != 'N/A' &&
          <div className="movie-card_right__bd">
            <WhatshotIcon fontSize="medium"/> { movie.imdbRating }
          </div>
        }
        <div className="movie-card_right__info">
          {movie.Episode ? `Episode #${movie.Episode}` : ''}
          {movie.Year}
        </div>
        <div>
          {isOpen &&
          movieContent &&
          parseInt(onClickIndex) == index &&
          onPhoneMode ? (
            <div className="movie-card_right__phone">
              <MovieContent
                movie={movieContent}
                handleClose={() => {}}
                onTabletMode={onTabletMode}
              />
            </div>
          ) : (
            <button
              className="movie-card_right__button"
              onClick={() => {
                handleOpenDetail(true);
              }}
            >
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
