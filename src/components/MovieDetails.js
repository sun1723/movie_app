
export const movieDetails = ({}) => {
  return (
    <div className="movie-details">
      <MovieContent
        movie={movieContent}
        isOpenList={isOpenList}
        hideDetail={hideDetail}
      />
    </div>
  );
};
