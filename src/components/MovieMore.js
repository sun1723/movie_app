import { useState, useEffect } from "react";
import '../utils/movie_more.scss'
import { Tab
 } from "./Tab";
export const MovieMore = ({movie}) => {
  const [isOpenPlot, setIsOpenPlot] = useState(false);
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [isOnClick, setIsOnClick] = useState(false);

  useEffect (() => {
    if(isOpenPlot)
      handleOpenPlot();
  },[isOpenPlot]);

  useEffect (() => {
    if(isOpenDetails)
      handleOpenDetails();
  },[isOpenDetails])

  const handleOpenPlot = () => {
    console.log('detial', isOpenDetails)
    if(isOpenDetails){
      setIsOpenDetails(false);
    }; 
  }

  const handleOpenDetails = () => {
    console.log('openPlot',isOpenPlot)
    if(isOpenPlot){
      setIsOpenPlot(false)
    }; 
  }

  return (
    <div className="movie_details" style={{lineHeight:'2em'}}>
      <div className="movie_details__tabs">
        <Tab title = "Plot" handleOnclick={() => setIsOpenPlot(true)} isOnClick={isOpenPlot}/>
        <Tab title = "Details" handleOnclick={() => setIsOpenDetails(true)} isOnClick={isOpenDetails}/>
      </div>
      <div className="movie_details__content">
          {isOpenDetails &&
            <>
              <div>Actors: {movie.Actors}</div>
              <div>Country: {movie.Country}</div>
              <div>Release Date: {movie.Released}</div>
              {/* important <div>Rating: {movie.imdbRating ? movie.imdbRating : '' }</div> */}
              {/* <div>Vote: {movie.imdbVotes ? movie.imdbVotes : '' }</div> */}
              <div>writer: {movie.Writer}</div>
              <div>score: {movie.Metascore}</div>
              <div>Director: {movie.Director}</div>
              <div>Rated: {movie.Rated}</div>
            </>
          }
          {isOpenPlot && 
            <>
              <div>
                {movie.Plot}
              </div>
            </>
          }
      </div>
    </div>
  )
}