import React from 'react'
import { useEffect, useState } from 'react'
import '../utils/search_box.scss'

export const SearchBox = ({onSearch, iconAfter}) => {
  const [searchValue, setSearchValue] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    //get local storage
    if(window.localStorage.getItem('search'))
    {
      setSearchValue(window.localStorage.getItem('search'));
      setOpenSearch(true)
    } 
    onSearch(searchValue)
  },[])

  useEffect ( () =>{
    if(openSearch){
      onSearch(searchValue);
      storeInLocal(searchValue)
      setOpenSearch(false)
    }
  },[openSearch])

  /**
   * storeInLocal: store search value in local storage
   */
  const storeInLocal = (searchValue) => {
    window.localStorage.setItem('search', searchValue);
  }

  return (
    <div className='search-box'>
      <span className='search-box_input'>
        <input
          onChange={val => setSearchValue(val.currentTarget.value)}
          placeholder="Input Search"
          value={searchValue}
        />
      </span>
      <div className='search-box_icon'>
        <button onClick={() => {setOpenSearch(true); }}>
          {iconAfter} 
        </button>
      </div>
    </div>
  );
}