import { useEffect, useState } from 'react'

export const SearchBox = ({onSearch}) => {
  const [searchValue, setSearchValue] = useState("")

  return (
    <>
      <input
        onChange={val => setSearchValue(val.currentTarget.value)}
        placeholder="Input Search"
      />
      <button variant="outline-secondary" id="button-addon1" onClick={() => {onSearch(searchValue)}}>
        Search
      </button>
    </>
  );
}