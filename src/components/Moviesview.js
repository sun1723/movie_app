import {useEffect, useState} from 'react'
import {MovieViewcss} from '../utils/styles'
import {getMoviesByidOrTitle, getMoviesBySearch} from '../api/MovieApi'
import { Nav } from './Nav';

import { Main } from './Main';

export const Moviesview = () => {
  const [searchValueBackup, setSearchValueBackup]  = useState("")
  const [movieContent, setMovieContent] = useState(null);
  
  const [hideDetail, setHideDetail] = useState(false);
  const [showList, setShowList] = useState(false);
  const [onClickIndex, setOnClickIndex] = useState(0);
  const [movies, setMovies] = useState(null);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [resultNum, setResultNum] = useState(0);
  const [onTabletMode, setOnTabletMode] = useState(false);
  const [onPhoneMode, setOnPhoneMode] = useState(false);

  useEffect(() => {
    if(searchValueBackup.length>=3)
      fetchMovies()
  },[])

  useEffect (() => {
    window.addEventListener('resize', windowResize);
  })

  /**
   * windowResize: handle window resize
   */
  const windowResize = () => {
    if(window.innerWidth > 600){
      setOnTabletMode(true);
    }else if(window.innerWidth < 600){
      setOnPhoneMode(true);
      setOnTabletMode(false);
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
      console.log(data)
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
    <div className='view' style={{height:{windowHeight}}}>
      <Nav handleOnSearchClick={handleOnSearchClick}/>
        (
          <MovieViewcss>
            <Main 
              fetchMovieById={fetchMovieById}
              onTabletMode={onTabletMode}
              onPhoneMode={onPhoneMode}
              movies={movies}
              searchValueBackup={searchValueBackup}
              onClickIndex={onClickIndex}
              movieContent={movieContent}
              />
          </MovieViewcss>
        )
    </div>
  );
}