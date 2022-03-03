import { SearchBox } from "./SearchBox";
import "../utils/nav.scss";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import Menu from "@material-ui/core/Menu";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

export const Nav = ({ handleOnSearchClick, handleOpenSettings }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar_search">
        <SearchBox onSearch={handleOnSearchClick} iconAfter={<SearchIcon />} />
      </div>
      <div className="nav-bar_menu">
        <MenuIcon onClick={(evt) => setMenuAnchorEl(evt.currentTarget)} />
      </div>
      <Menu
        id="simple-menu"
        anchorEl={menuAnchorEl}
        keepMounted
        style={{ top: "20px", width: "250px" }}
        disableScrollLock={true}
        open={Boolean(menuAnchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className="nav-bar_menu__item disabled">
          <ExitToAppIcon className="nav-bar_icon" />
          Sign In / Sign up
        </div>
        <div className="nav-bar_menu__item disabled">
          <AccountBoxIcon className="nav-bar_icon" />
          My Account
        </div>
        <div className="nav-bar_menu__item" onClick={() => {handleOpenSettings()}}>
          <BookmarkIcon className="nav-bar_icon" />
          Saved Movies
        </div>
      </Menu>
    </div>
  );
};
