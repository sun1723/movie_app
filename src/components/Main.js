import {useEffect, useState} from 'react'
import {getMoviesByidOrTitle} from '../api/MovieApi'
import { Grid } from '@material-ui/core';
import { MovieContent } from './MovieContent';
import MenuIcon from '@material-ui/icons/Menu';
import {MovieList} from './MovieList';
import { MovieModal } from './MovieModal';
import '../utils/main.scss'
import { InputPagination } from './InputPagination';
import { PaginationFor } from './PaginationFor';
import { TypeFilterList } from './TypeFilterList';
import FilterListIcon from '@material-ui/icons/FilterList';

export const Main = ({fetchMovieById, movies,currentPage,currentType,handleOnChangeType, handleChangePage, totalResultNum, searchValueBackup, onClickIndex, movieContent, onTabletMode, onPhoneMode }) => {
  const [isOpen, setIsOpen] = useState(false);  

  const handleOpenDetail = (value) => {
    setIsOpen(value)
  }

  return (
    <div className="main">
      <div className='main_type'>
        <TypeFilterList 
          selectedType={currentType}
          handleOnChangeType={handleOnChangeType}/>
      </div>
      <div className="main_result" >
        <FilterListIcon className='main_result__' fontSize='small'/>
        {/* <span><MenuIcon /></span> */}
        {/* <span>{movies.length} Result for {searchValueBackup}</span> */}
        <span>
          <InputPagination 
            currentPage={currentPage}
            totalResultNum={totalResultNum}
            movieCount = {movies.length}
            handleChangePage={handleChangePage}/>
        </span>
      </div>
      {movies && movies.length > 0 ?
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
      :
      searchValueBackup ?
        <div className="main_noResult">No Result for {searchValueBackup} ({currentType})</div>
        :
        <div className="main_emptySearch" >Please type in search box. </div>  
      }
    </div>
  );
}