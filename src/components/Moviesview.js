import {useEffect, useState} from 'react'
import {getMoviesByidOrTitle, getMoviesBySearch} from '../api/MovieApi'
import { MovieCard } from './MovieCard'
import { Grid, Container} from '@material-ui/core';
import { MovieContent } from './MovieContent';
import {MovieViewcss} from '../utils/styles'
import { Nav } from './Nav';

export const Moviesview = () => {
  const [movies, setMovies] = useState(null);
  const [resultNum, setResultNum] = useState(0);
  const [searchValueBackup, setSearchValueBackup]  = useState("")
  const [movieContent, setMovieContent] = useState(null);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    if(searchValueBackup.length>=3)
      fetchMovies()
  },[])

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
        setResultNum(data.totalResults);
      }
    }).catch(err =>{
      console.log(err)
    })
  };

  /**
   * fetchMovieById: fetch movie by id
   */
  const fetchMovieById = (onClickId) => {
    getMoviesByidOrTitle({
      id: onClickId
    }).then (res => {
      const data = res.data;
      if(data.Response)
        setMovieContent(data)
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
            <div className="result" >{movies.length} Result for {searchValueBackup}</div>
            <Grid className="container movieContent" container item  xs={12}>
              <Grid className='movieList' item xs={4} style={{height: '100%', overflow:'hidden scroll'}}>
                  { movies.map((movie,index) => 
                    <MovieCard 
                      movie={movie}
                      index={index}
                      fetchMovieById = {fetchMovieById}
                    />
                  )}
              </Grid>
              <Grid className='movieDetails' item xs={8} style ={{height: '100%'}}>
                  <MovieContent movie={movieContent}/>
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