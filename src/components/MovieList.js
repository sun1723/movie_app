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
          fetchMovieById={fetchMovieById}
          onClickIndex={onClickIndex}
          movieContent={movieContent}
        />
      ))}
    </div>
  );
};
