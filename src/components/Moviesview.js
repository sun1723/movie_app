import {useEffect, useState} from 'react'
import {getMoviesByidOrTitle, getMoviesBySearch} from '../api/MovieApi'
import {MovieListCss} from '../utils/styles'

export const Moviesview = () => {
  const [movies, setMovies] = useState(null);
  const [resultNum, setResultNum] = useState(0);
  const [searchValue, setSearchValue] = useState("")
  const [searchValueBackup, setSearchValueBackup]  = useState("")
  const [hoverIndex, setHoverIndex] = useState(null);
  useEffect(() => {
    if(searchValue.length>=3)
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
        setMovies(data.Search);
        setResultNum(data.totalResults);
      }
    }).catch(err =>{
      console.log(err)
    })
  };

  /**
   * handleOnSearchClick: handle event when click search
   */
  const handleOnSearchClick = () => {
    fetchMovies(searchValue);
    setSearchValueBackup(searchValue)
  }

  return (
    <MovieListCss>
        <input
          onChange={val => setSearchValue(val.currentTarget.value)}
          placeholder="Input Search"
        />
        <button variant="outline-secondary" id="button-addon1" onClick={() => {handleOnSearchClick()}}>
          Search
        </button>
      {movies && movies.length > 0 ?
        (<>
          <div>{movies.length} Result for {searchValueBackup}</div>
          <ul>
              { movies.map((movie,index) => 
                <li
                  id = {index}
                  style={{backgroundColor: (hoverIndex == index) ? '#e0e0e0': '#fff'}}
                  onMouseEnter={evt => {evt.persist(); setHoverIndex(evt.currentTarget.id)}}
                  onMouseLeave={evt => setHoverIndex(null)}>
                    {movie.Title}
                </li>
              )}
          </ul>
        </>)
        : 
        searchValueBackup ?
          <div>No Result for {searchValueBackup}</div>
          :
          <div>Please type in search box. </div>
      }
      
    </MovieListCss>
  );
}