import React from 'react'
import { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';

export const SearchBox = ({onSearch}) => {
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className='search-box'>
      <input
        onChange={val => setSearchValue(val.currentTarget.value)}
        placeholder="Input Search"
      />
      <button onClick={() => {onSearch(searchValue)}}>
        <SearchIcon />
      </button>
    </div>
  );
}