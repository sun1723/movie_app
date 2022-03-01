import {useEffect, useState} from 'react'
import '../utils/movie_view.scss'
import {getMoviesByidOrTitle, getMoviesBySearch} from '../api/MovieApi'
import { Nav } from './Nav';
import {types} from '../utils/app_constant'
import { Main } from './Main';

export const Moviesview = () => {
  const [searchValueBackup, setSearchValueBackup]  = useState("")
  const [movieContent, setMovieContent] = useState(null);
  
  const [onClickIndex, setOnClickIndex] = useState(0);
  const [movies, setMovies] = useState([]);
  const [resultNum, setResultNum] = useState(0);
  const [onTabletMode, setOnTabletMode] = useState(false);
  const [onPhoneMode, setOnPhoneMode] = useState(false);
  const [collapMode, setCollapMode] = useState(false);
  const [dropDownEnable, setDropDownEnable] = useState(false);
  const [anchorEl, setAnchorEl] = useState('-1');
  const [selectedMovieType, setSelectedMovieType] = useState(types[0]);
  const [selectedMovieTypeBackup, setSelectedMovieTypeBackup] = useState(selectedMovieType)
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState(0);

  useEffect(() => {
    windowResize();
  },[]);

  useEffect(() => {
    if(anchorEl == 'drop' || anchorEl == 'radio_icon' || anchorEl == 'radio_title' || anchorEl == 'radio_con' || anchorEl == "type" ){
      //stay open
    }else if(dropDownEnable){
      setDropDownEnable(!dropDownEnable)
    }
  },[anchorEl ])

  useEffect(() => {
    if(searchValueBackup.length>=3)
      fetchMovies()
  },[selectedMovieType, searchValueBackup, selectedPage, selectedYear])

  useEffect (() => {
    window.addEventListener('resize', windowResize);
  })

  /**
   * handleChangePage: handle change page for movies
   */
  const handleChangePage = (page) => {
    setSelectedPage(page);
  }

  /**
   * handleChangeYear: handle change year for movies
   */
  const handleChangeYear = (year) => {
    setSelectedYear(year);
  }

  /**
   * handleOnClick: handle click on button
   */
   const handleOnOpen = () => {
    if(collapMode){
      setDropDownEnable(true);
    }
  }

  /**
   * handleOnClose: handle close drop down
   */
  const handleOnClose = () => {
    setDropDownEnable(false);
  }

  /**
   * windowResize: handle window resize
   */
  const windowResize = () => {
    if(window.innerWidth <= 600){
      setOnPhoneMode(true);
      setOnTabletMode(false);
      setCollapMode(true);
    }else if(window.innerWidth > 600 && window.innerWidth <= 768){
      setOnPhoneMode(false);
      setOnTabletMode(true);
      setCollapMode(true);
    }else if (window.innerWidth > 768 && window.innerWidth < 992){
      setOnTabletMode(true);
      setOnPhoneMode(false);
      setCollapMode(true);
    }else if (window.innerWidth > 600 ){
      setOnTabletMode(true);
      setOnPhoneMode(false);
      setCollapMode(false);
    }
  }



  /**
   * fetchMovieById: fetch movie by id
   */
  const fetchMovieById = (onClickId,index) => {
    getMoviesByidOrTitle({
      id: onClickId
    }).then (res => {
      const data = res.data;
      if(data.Response)
        setMovieContent(data);
        setOnClickIndex(index);
    })
  }
  
  /**
 * fetchMovies : fetch movies from api
 */
  const fetchMovies = () => {
    if(!searchValueBackup  || (selectedYear < 1900 && selectedYear != 0) || selectedYear > 2050 ){
      return;
    }
    getMoviesBySearch({
      search: searchValueBackup,
      type: selectedMovieType == 'any' ? '' : selectedMovieType,
      page: selectedPage,
      year: selectedYear
    }).then (res =>{
      const data = res.data
      if(data.Response == "True"){
        setMovies(data.Search);
        setMovieContent(data.Search ? data.Search[0] : null)
        setOnClickIndex(-1)
        setResultNum(data.totalResults);
      }else{
        setMovies([]);
        console.log("MovieView Error: ", data.Error)
      }
    }).catch(err =>{
      console.log(err)
    })
  };
  /**
   * handleOnSearchClick: handle event when click search
   */
  const handleOnSearchClick = (val) => {
    fetchMovies(val);
    setSearchValueBackup(val);
    setSelectedMovieType(selectedMovieTypeBackup);
    resetAfterSearch();
  }

  /**
 * resetAfterSearch: reset variables after search
 */
  const resetAfterSearch = () => {
    setSelectedPage(1);
  }

  /**
   * handleOnChangeType: handle change type by radio input
   */
  const handleOnChangeType = (type) => {
    setSelectedMovieType(type);
    setSelectedMovieTypeBackup(type)
  }

  return (
    <div className='view' onClick={(evt) => {setAnchorEl(evt.target.id) }}>
      <div className='nav'>
        <Nav handleOnSearchClick={handleOnSearchClick} 
          selectedType={selectedMovieTypeBackup}
          handleOnChangeType = {handleOnChangeType}
          types={types} 
          collapMode={collapMode}
          handleOnOpen={handleOnOpen}
          handleOnClose={handleOnClose}
          dropDownEnable={dropDownEnable}
          selectedYear={selectedYear}
          handleChangeYear={handleChangeYear}/>
      </div>
      <div className='main'>
        <Main 
          fetchMovieById={fetchMovieById}
          onTabletMode={onTabletMode}
          onPhoneMode={onPhoneMode}
          movies={movies}
          searchValueBackup={searchValueBackup}
          onClickIndex={onClickIndex}
          movieContent={movieContent}
          currentPage={selectedPage}
          totalResultNum={resultNum}
          handleChangePage={handleChangePage}
          currentType={selectedMovieTypeBackup}
        />
      </div>
    </div>
  );
}