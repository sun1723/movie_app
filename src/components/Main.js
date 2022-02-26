import {useEffect, useState} from 'react'
import {getMoviesByidOrTitle} from '../api/MovieApi'
import { Grid } from '@material-ui/core';
import { MovieContent } from './MovieContent';
import MenuIcon from '@material-ui/icons/Menu';
import {MovieList} from './MovieList';
import { MovieModal } from './MovieModal';
import '../utils/main.scss'
import { PaginationFor } from './PaginationFor';

export const Main = ({fetchMovieById, movies, searchValueBackup, onClickIndex, movieContent, onTabletMode, onPhoneMode, handleChangePage}) => {
  const [isOpen, setIsOpen] = useState(false);  

  const handleOpenDetail = (value) => {
    setIsOpen(value)
  }

  return (
    <div className="main">
    {movies && movies.length > 0 ?
      <>
        <div className="main_result" ><span><MenuIcon /></span><span>{movies.length} Result for {searchValueBackup}</span><PaginationFor count={100} handleChangePage={handleChangePage}/></div>
        <Grid className="main_movies" container item  xs={12}>
        { onTabletMode &&
          <MovieModal isOpen={isOpen} movie={movieContent} handleClose={() => { setIsOpen(false)}} onTabletMode={onTabletMode}/>
        }
          <div className='main_movies__list'>
            <MovieList 
              onTabletMode={onTabletMode}
              onPhoneMode={onPhoneMode}
              movies={movies}
              onClickIndex={onClickIndex}
              fetchMovieById={fetchMovieById}
              movieContent={movieContent}
              handleOpenDetail={handleOpenDetail}
              isOpen={isOpen}/>
          </div>
        </Grid>
    </>
    :
      searchValueBackup ?
        <div className="main_noResult">No Result for {searchValueBackup}</div>
        :
        <div className="main_emptySearch" >Please type in search box. </div>  
    }</div>
  );
}