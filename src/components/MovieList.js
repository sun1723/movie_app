import { MovieCard } from "./MovieCard";
import "../utils/movie_list.scss";

export const MovieList = ({
  movies,
  onClickIndex,
  fetchMovieById,
  movieContent,
  onPhoneMode,
  onTabletMode,
  handleOpenDetail,
  isOpen,
  handleAddSaved,
  savedMap,
  setting
}) => {
  return (
    <div className="movieList">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          onPhoneMode={onPhoneMode}
          onTabletMode={onTabletMode}
          movie={movie}
          index={index}
          handleOpenDetail={handleOpenDetail}
          isOpen={isOpen}
          handleAddSaved={handleAddSaved}
          fetchMovieById={fetchMovieById}
          onClickIndex={onClickIndex}
          movieContent={movieContent}
          savedMap={savedMap}
          setting={setting}
        />
      ))}
    </div>
  );
};
