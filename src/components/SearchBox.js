import React from 'react'
import { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';

export const SearchBox = ({onSearch}) => {
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
      <input
        onChange={val => setSearchValue(val.currentTarget.value)}
        placeholder="Input Search"
        value={searchValue}
      />
      <button onClick={() => {setOpenSearch(true); }}>
        <SearchIcon />
      </button>
    </div>
  );
}