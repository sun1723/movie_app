import {useEffect, useState} from 'react'
import {getMoviesByidOrTitle, getMoviesBySearch} from '../api/MovieApi'
import { MovieCard } from './MovieCard'
import { SearchBox } from './SearchBox';
import { Grid } from '@material-ui/core';
import { MovieContent } from './MovieContent';

export const Moviesview = () => {
  const [movies, setMovies] = useState(null);
  const [resultNum, setResultNum] = useState(0);
  const [searchValueBackup, setSearchValueBackup]  = useState("")
  const [hoverIndex, setHoverIndex] = useState(null);
  const [onClickId, setOnClickId] = useState("")
  const [movieContent, setMovieContent] = useState(null);

  useEffect(() => {
    if(searchValueBackup.length>=3)
      fetchMovies()
  },[])

  useEffect(() => {
    if(onClickId)
      fetchMovieById()
  },[onClickId])

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
  const fetchMovieById = () => {
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
    <div style={{ height: "100vh" }}>
      <Grid item  xs={12}>
        <SearchBox onSearch={handleOnSearchClick} />
      </Grid>
      {movies && movies.length > 0 ?
        (
          <>
          <div>{movies.length} Result for {searchValueBackup}</div>
          <Grid container item  xs={12} style={{ height: "92%",  }}>
            <Grid item xs={4} style={{ height: "100%", overflow:'hidden scroll'}}>
                { movies.map((movie,index) => 
                <div
                  id = {index}
                  key = {movie.imdbID}
                  style={{backgroundColor: (hoverIndex == index) ? '#e0e0e0': '#fff'}}
                  onMouseEnter={evt => {evt.persist(); setHoverIndex(evt.currentTarget.id)}}
                  onMouseLeave={evt => setHoverIndex(null)}
                  onClick={evt => setOnClickId(movie.imdbID)}>
                    <MovieCard 
                      movie={movie}
                    />
                  </div>
                )}
            </Grid>
            <Grid item xs={8}>
                <MovieContent movie={movieContent}/>
            </Grid>
          </Grid>
          </>
        )
        : 
        searchValueBackup ?
          <div>No Result for {searchValueBackup}</div>
          :
          <div>Please type in search box. </div>  
      }
     
      
    </div>
  );
}