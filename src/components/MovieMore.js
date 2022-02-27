import { useState, useEffect } from "react";
import '../utils/movie_more.scss'
import { ContentDetail } from "./ContentDetail";
import { Tab
 } from "./Tab";
export const MovieMore = ({movie}) => {
  const [isOpenPlot, setIsOpenPlot] = useState(true);
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
    if(isOpenDetails){
      setIsOpenDetails(false);
    }; 
  }

  const handleOpenDetails = () => {
    if(isOpenPlot){
      setIsOpenPlot(false)
    }; 
  }

  return (
    <div className="movie_details" >
      <div className="movie_details__tabs">
        <Tab title = "Plot" handleOnclick={() => setIsOpenPlot(true)} isOnClick={isOpenPlot}/>
        <Tab title = "Details" handleOnclick={() => setIsOpenDetails(true)} isOnClick={isOpenDetails}/>
      </div>
      <div className="movie_details__content">
          {isOpenDetails &&
            <>
              <ContentDetail title='Actors' content={movie.Actors} />
              <ContentDetail title='writer' content={movie.Writer} />
              <ContentDetail title='Director' content={movie.Director} />
              <ContentDetail title='Country' content={movie.Country} />
              <ContentDetail title='Release Date' content={movie.Released} />
              {/* important <div>Rating: {movie.imdbRating ? movie.imdbRating : '' }</div> */}
              {/* <div>Vote: {movie.imdbVotes ? movie.imdbVotes : '' }</div> */}
            </>
          }
          {isOpenPlot && 
            <ContentDetail title="Plot" active={true} content={movie.Plot}/>
          }
      </div>
    </div>
  )
}