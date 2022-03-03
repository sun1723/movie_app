import '../utils/year_range.scss'
import { FilterItem } from './FilterItem'

import { useState } from 'react';

export const RangeYear = ({}) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  
  return (
    <FilterItem 
      title=""
      content={(
        <>
          <span>min</span>
          <input className='range_input' onChange={(evt) => {setStart(evt.currentTarget.value)}}/>
          -
          <span>max</span>
          <input className='range_input' onChange={(evt) => {setEnd(evt.currentTarget.value)}}/>
        </>
      )}
    />
  )
}