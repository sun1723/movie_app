import {useEffect, useState} from 'react'
import {getMoviesByidOrTitle} from '../api/MovieApi'
import { Grid } from '@material-ui/core';
import { MovieContent } from './MovieContent';
import MenuIcon from '@material-ui/icons/Menu';
import {MovieList} from './MovieList'
import '../utils/main.scss'

export const Main = ({fetchMovieById, movies, searchValueBackup, onClickIndex, movieContent}) => {
  const [isOpenList, setIsOpenList] = useState(false);
  

  return (
    <>
    {movies && movies.length > 0 ?
      <div className="main">
        <div className="main_result" ><span onClick={(evt) => {setIsOpenList(!isOpenList)}}><MenuIcon /></span><span>{movies.length} Result for {searchValueBackup}</span></div>
        <Grid className="main_movies" container item  xs={12}>
        { isOpenList &&
            <Grid className='main_movies__list' item xs={4}>
              <MovieList 
                movies={movies}
                onClickIndex={onClickIndex}
                fetchMovieById={fetchMovieById}/>
            </Grid>
          }
          <Grid className='main_movies__details' item xs={8}>
            <MovieContent 
              movie={movieContent} 
              isOpenList={isOpenList}/>
          </Grid>
        </Grid>
    </div>
    :
      searchValueBackup ?
        <div className="result">No Result for {searchValueBackup}</div>
        :
        <div className="result" >Please type in search box. </div>  
    }</>
  );
}