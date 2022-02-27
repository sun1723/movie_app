import { ScoreBox } from "./ScoreBox"
import '../utils/score_list.scss'

export const ScoreList = ({movie}) => {
  return (
    <>
      <div className="score-title" >Scores</div>
      <div  className="score-list">
        {movie.Ratings && movie.Ratings.length > 0 &&
          movie.Ratings.map((rate,index) => 
            <ScoreBox rate={rate}  key={index} noBorder={index == movie.Ratings.length - 1}/> 
          )
        }
      </div> 
    </>
  )
}