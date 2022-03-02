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
import Popover from '@material-ui/core/Popover';
import { YearSelect } from './YearSlider';

export const Main = ({fetchMovieById, movies,currentPage,currentType, selectedYear, handleOnChangeType,handleChangeYear, handleChangePage, totalResultNum, searchValueBackup, onClickIndex, movieContent, onTabletMode, onPhoneMode }) => {
  const [isOpen, setIsOpen] = useState(false);  
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenDetail = (value) => {
    setIsOpen(value)
  }

  /**
   * handleOpenFilter: handle open popOver window for filter
   */
  const handleOpenFilter = (evt) => {
    setAnchorEl(evt.currentTarget);
  }

  /**
   * handleOnCloseFilter: handle close popOver window for filter
   */
  const handleOnCloseFilter = () => {
    setAnchorEl(null);
  }

  return (
    <div className="main">
      <div className='main_type'>
        <TypeFilterList 
          selectedType={currentType}
          handleOnChangeType={handleOnChangeType}/>
      </div>
      <div className="main_result" >
        <FilterListIcon id={Boolean(anchorEl) ? "filter" : undefined} className='main_result__icon' fontSize='small' onClick={(evt) => {handleOpenFilter(evt)}}/>
        <Popover
          id={Boolean(anchorEl) ? "filter" : undefined}
          open={Boolean(anchorEl)}
          onClose={handleOnCloseFilter}
          anchorEl={anchorEl}
          disableScrollLock={ true }
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <YearSelect 
            handleChangeYear={handleChangeYear}
            selectedYear={selectedYear}
          />
        </Popover>
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