import {useEffect, useState} from 'react'
import '../utils/movie_view.scss'
import {getMoviesByidOrTitle, getMoviesBySearch} from '../api/MovieApi'
import { Nav } from './Nav';

import { Main } from './Main';

export const Moviesview = () => {
  const [searchValueBackup, setSearchValueBackup]  = useState("")
  const [movieContent, setMovieContent] = useState(null);
  
  const [onClickIndex, setOnClickIndex] = useState(0);
  const [movies, setMovies] = useState(null);
  const [resultNum, setResultNum] = useState(0);
  const [onTabletMode, setOnTabletMode] = useState(false);
  const [onPhoneMode, setOnPhoneMode] = useState(false);
  const [collapMode, setCollapMode] = useState(false);
  const [dropDownEnable, setDropDownEnable] = useState(false);
  const [anchorEl, setAnchorEl] = useState('-1');
  const types = [
    "movie",
    "series",
    "episode"
  ]

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
  },[])

  useEffect (() => {
    window.addEventListener('resize', windowResize);
  })

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
    if(window.innerWidth < 600){
      setOnPhoneMode(true);
      setOnTabletMode(false);
      setCollapMode(false);
    }else if(window.innerWidth > 600 && window.innerWidth < 768){
      setOnPhoneMode(false);
      setOnTabletMode(true);
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
  const fetchMovies = (search) => {
    getMoviesBySearch({
      search: search,
      type:'movie',
      page:"1"
    }).then (res =>{
      const data = res.data
      if(data.Response){
        setMovies(data.Search);
        setMovieContent(data.Search[0])
        setOnClickIndex(-1)
        setResultNum(data.totalResults);
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
    setSearchValueBackup(val)
  }

  return (
    <div className='view' onClick={(evt) => {setAnchorEl(evt.target.id) }}>
      <div className='nav'>
        <Nav handleOnSearchClick={handleOnSearchClick} 
            types={types} 
            collapMode={collapMode}
            handleOnOpen={handleOnOpen}
            handleOnClose={handleOnClose}
            dropDownEnable={dropDownEnable}/>
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
          />
      </div>
    </div>
  );
}