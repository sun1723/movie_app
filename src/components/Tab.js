import { useEffect, useState } from 'react';
import '../utils/tab.scss'

export const Tab = ({title, handleOnclick, isOnClick}) => {

  return (
    <div className={isOnClick ? 'tab active' : 'tab'} onClick={(evt) => {handleOnclick()}}>{title}</div>
  )
}