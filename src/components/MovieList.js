import { Grid, Container} from '@material-ui/core';
import { MovieCard } from './MovieCard';
import '../utils/movie_list.scss'

export const MovieList = ({movies, onClickIndex, fetchMovieById}) => {

  return (
    <div className='movieList' >
        {movies.map((movie,index) => 
          <MovieCard 
            className="movie-card"
            movie={movie}
            index={index}
            fetchMovieById = {fetchMovieById}
            onClickIndex = {onClickIndex}
          />
      )}
    </div>
  )
}