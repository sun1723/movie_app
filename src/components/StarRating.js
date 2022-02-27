import StarRateIcon from '@material-ui/icons/StarRate';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import '../utils/star_rating.scss'
import { useEffect, useRef } from 'react';

export const StarRating = ({rate}) => {
  const starNum = Math.floor(rate/2);
  const starRef = useRef([]);

  useEffect(() => {
    updateFillStar();
  },[])

  const updateFillStar = () => {
    if(starRef.current && starRef.current.length > 0 ){
      starRef.current.map (star => {
        star.style.color = 'red';
      })
    }
  }
  return (
    <div className='star-rating'>
      <div className='star-rating_stars' >
        <StarRateIcon id="1" ref={node => {if(starNum >= 1) starRef.current[0] = node}}/>
        <StarRateIcon id="2" ref={node => {if(starNum >= 2) starRef.current[1] = node}}/>
        <StarRateIcon id="3" ref={node => {if(starNum >= 3) starRef.current[2] = node}}/>
        <StarRateIcon id="4" ref={node => {if(starNum >= 4) starRef.current[3] = node}}/>
        <StarRateIcon id="5" ref={node => {if(starNum >= 5) starRef.current[4] = node}}/>
      </div>
    </div>
  );
}