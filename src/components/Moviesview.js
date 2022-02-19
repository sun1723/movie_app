import {useEffect, useState} from 'react'
import {getMoviesByidOrTitle, getMoviesBySearch} from '../api/MovieApi'
import { MovieCard } from './MovieCard'
import { Grid, Container} from '@material-ui/core';
import { MovieContent } from './MovieContent';
import {MovieViewcss} from '../utils/styles'
import { Nav } from './Nav';
import MenuIcon from '@material-ui/icons/Menu';

export const Moviesview = () => {
  const [movies, setMovies] = useState(null);
  const [resultNum, setResultNum] = useState(0);
  const [searchValueBackup, setSearchValueBackup]  = useState("")
  const [movieContent, setMovieContent] = useState(null);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [onClickIndex, setOnClickIndex] = useState(0);
  const [isOpenList, setIsOpenList] = useState(false);
  const [hideDetail, setHideDetail] = useState(false);
  const [showList, setShowList] = useState(false);

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
    console.log(window.innerWidth)
    if(window.innerWidth< 1024 && window.innerWidth > 720){
      setShowList(false);
      setHideDetail(true);
    }else if(window.innerWidth <= 720) {
      setHideDetail(false);
      setShowList(true);
    }
    else {
      setHideDetail(false);
      setShowList(false);
    }
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
        console.log(data)
        setMovies(data.Search);
        setMovieContent(data.Search[0])
        setOnClickIndex(0)
        setResultNum(data.totalResults);
      }
    }).catch(err =>{
      console.log(err)
    })
  };

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
   * handleOnSearchClick: handle event when click search
   */
  const handleOnSearchClick = (val) => {
    fetchMovies(val);
    setSearchValueBackup(val)
  }

  return (
    <div className='view' style={{height:{windowHeight}}}>
      <Nav handleOnSearchClick={handleOnSearchClick}/>
      {movies && movies.length > 0 ?
        (
          <MovieViewcss>
            {console.log(hideDetail, " ", showList)}
            <div className="result" ><span style={{cursor:'pointer'}} onClick={(evt) => {setIsOpenList(!isOpenList)}}><MenuIcon /></span><span>{movies.length} Result for {searchValueBackup}</span></div>
            <Grid className="container movieContent" container item  xs={12}>
            { isOpenList &&
              <Grid className='movieList' item xs={hideDetail ? 5 : showList ? 12 : 4} >
                   {movies.map((movie,index) => 
                    <MovieCard 
                      movie={movie}
                      index={index}
                      fetchMovieById = {fetchMovieById}
                      onClickIndex = {onClickIndex}
                      hideDetail={showList}
                    />
                  )}
              </Grid>
              }
              <Grid className='movieDetails' item xs={isOpenList ? hideDetail ? 7 : showList ? 0 : 8 : 12} style ={{height: '100%', width: '80%', display: showList && isOpenList ? 'none' : ''}}>
                  <MovieContent movie={movieContent} isOpenList={isOpenList} hideDetail={hideDetail}/>
              </Grid>
            </Grid>
          </MovieViewcss>
        )
        : 
        searchValueBackup ?
          <div className="result">No Result for {searchValueBackup}</div>
          :
          <div className="result" >Please type in search box. </div>  
      }
    </div>
  );
}