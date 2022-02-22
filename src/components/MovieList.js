import { Grid, Container} from '@material-ui/core';
import { MovieCard } from './MovieCard';
import '../utils/movie_list.scss'

export const MovieList = ({movies, onClickIndex, fetchMovieById, movieContent}) => {

  return (
    <div className='movieList' >
        {movies.map((movie,index) => 
          <MovieCard 
            movie={movie}
            index={index}
            fetchMovieById = {fetchMovieById}
            onClickIndex = {onClickIndex}
            movieContent={movieContent}
          />
      )}
    </div>
  )
}