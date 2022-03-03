import { SearchBox } from "./SearchBox";
import "../utils/nav.scss";
import SearchIcon from "@material-ui/icons/Search";

export const Nav = ({ handleOnSearchClick }) => {
  return (
    <div className="nav-bar">
      <div className="nav-bar_search">
        <SearchBox onSearch={handleOnSearchClick} iconAfter={<SearchIcon />} />
      </div>
    </div>
  );
};
