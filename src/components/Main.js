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
import { YearSelect } from './YearSelect';
import { RangeYear } from './RangeYear';
import { FilterItem } from './FilterItem'
import { yearList } from "../utils/app_constant";
import { MenuList } from "./MenuList";

export const Main = ({fetchMovieById, movies,currentPage,currentType, selectedYear, handleOnChangeType,handleChangeYear, handleChangePage, totalResultNum, searchValueBackup, onClickIndex, movieContent, onTabletMode, onPhoneMode }) => {
  const [isOpen, setIsOpen] = useState(false);  
  const [anchorEl, setAnchorEl] = useState(null);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [year, setYear] = useState('')
  const [filter, setFilter] = useState({year:{start:'', end:''}});
  const [collapSetting, setCollapSetting] = useState(false);

  useEffect (() => {
    setFilter({year:{start:start, end: end}})
    // handleChangeYear(filter && filter.year ? filter.year : '');
  },[start,end])


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

  const submitFilter = () => {
    handleChangeYear(filter.year)
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
          <FilterItem 
            title="Year"
            content={(
              <MenuList 
                options={yearList()}
                handleChangeYear={setStart}
                selectedYear={start}/>
            )}
          />
          <div className='advanced' onClick={(evt) => {setCollapSetting(!collapSetting)}}>Advanced Settings</div>
          {collapSetting && 
          <FilterItem 
            title=""
            content={(
              <>
                <span>min</span>
                <input className='range_input' onChange={(evt) => {setStart(evt.currentTarget.value)}}/>
                -
                <span>max</span>
                <input className='range_input' onChange={(evt) => {setEnd(evt.currentTarget.value)}}/>
              </>
            )}
          />
          }
          <button className="filter_search" onClick={() => submitFilter()}>Search</button>
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