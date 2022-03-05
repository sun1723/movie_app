import React from "react";
import { useEffect, useState } from "react";
import "../utils/search_box.scss";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export const SearchBox = ({ onSearch, iconAfter }) => {
  const [searchValue, setSearchValue] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    //get local storage
    if (window.localStorage.getItem("search")) {
      setSearchValue(window.localStorage.getItem("search"));
      setOpenSearch(true);
    }
    onSearch(searchValue);
  }, []);

  useEffect(() => {
    if (openSearch) {
      onSearch(searchValue);
      storeInLocal(searchValue);
      setOpenSearch(false);
    }
  }, [openSearch]);

  /**
   * storeInLocal: store search value in local storage
   */
  const storeInLocal = (searchValue) => {
    window.localStorage.setItem("search", searchValue);
  };

  return (
    <div className="search-box">
      <span className="search-box_input">
        <input
          onChange={(val) => setSearchValue(val.currentTarget.value)}
          placeholder="Search ..."
          value={searchValue}
          id="search_input"
        />
        <HighlightOffIcon
          className="search-box_input__icon"
          fontSize="small"
          onClick={(evt) => {
            setSearchValue("");
          }}
        />
      </span>
      <div className="search-box_icon">
        <button
          id="search"
          onClick={() => {
            setOpenSearch(true);
          }}
        >
          {iconAfter}
        </button>
      </div>
    </div>
  );
};
