import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { MovieList } from "./MovieList";
import { MovieModal } from "./MovieModal";
import "../utils/main.scss";
import { InputPagination } from "./InputPagination";
import { TypeFilterList } from "./TypeFilterList";
import FilterListIcon from "@material-ui/icons/FilterList";
import Popover from "@material-ui/core/Popover";
import { FilterItem } from "./FilterItem";
import { yearList } from "../utils/app_constant";
import { MenuList } from "./MenuList";

export const Main = ({
  fetchMovieById,
  movies,
  currentPage,
  currentType,
  handleOnChangeType,
  handleChangeYear,
  handleChangePage,
  totalResultNum,
  searchValueBackup,
  onClickIndex,
  movieContent,
  onTabletMode,
  onPhoneMode,
  selectedYear,
  totalSeasons,
  handleOnChangeSeason,
  selectedSeason
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [filter, setFilter] = useState({ year: { start: "", end: "" } });
  const [collapSetting, setCollapSetting] = useState(false);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    setFilter({ year: { start: start, end: end } });
  }, [start, end]);

  useEffect(() => {
    constructMenuList();
  }, [totalSeasons,selectedSeason]);

  const handleOpenDetail = (value) => {
    setIsOpen(value);
  };

  const constructMenuList = () => {
    let list = [];
    for (let i = 1; i <= totalSeasons; i++) {
      list.push(
        <div
          className={selectedSeason == i ? "season_item active" : "season_item"}
          onClick={(evt) => {
            handleOnChangeSeason(i);
          }}
        >
          Season {i}
        </div>
      );
    }
    setMenuList(list);
  };

  /**
   * handleOpenFilter: handle open popOver window for filter
   */
  const handleOpenFilter = (evt) => {
    setAnchorEl(evt.currentTarget);
  };

  /**
   * handleOnCloseFilter: handle close popOver window for filter
   */
  const handleOnCloseFilter = () => {
    setAnchorEl(null);
  };

  const submitFilter = () => {
    handleChangeYear(filter.year);
  };

  return (
    <div className="main">
      <div className="main_type">
        <TypeFilterList
          selectedType={currentType}
          handleOnChangeType={handleOnChangeType}
          totalSeasons={totalSeasons}
        />
        <div className="main_info">
          Release Year: {selectedYear ? selectedYear : "any"}
        </div>
      </div>
      {currentType == "season" && (
        <div className="main_seasons">{menuList}</div>
      )}
      <div className="main_result">
        <FilterListIcon
          id={Boolean(anchorEl) ? "filter" : undefined}
          className="main_result__icon"
          fontSize="small"
          onClick={(evt) => {
            handleOpenFilter(evt);
          }}
        />
        <Popover
          id={Boolean(anchorEl) ? "filter" : undefined}
          open={Boolean(anchorEl)}
          onClose={handleOnCloseFilter}
          anchorEl={anchorEl}
          disableScrollLock={true}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <FilterItem
            title="Year"
            content={
              <MenuList
                options={yearList()}
                handleChangeYear={setStart}
                selectedYear={start}
              />
            }
          />
          <div
            className="advanced"
            onClick={(evt) => {
              setCollapSetting(!collapSetting);
            }}
          >
            Advanced Settings
          </div>
          {collapSetting && (
            <FilterItem
              title=""
              content={
                <>
                  <span>min</span>
                  <input
                    className="range_input"
                    onChange={(evt) => {
                      setStart(evt.currentTarget.value);
                    }}
                  />
                  -<span>max</span>
                  <input
                    className="range_input"
                    onChange={(evt) => {
                      setEnd(evt.currentTarget.value);
                    }}
                  />
                </>
              }
            />
          )}
          <button className="filter_search" onClick={() => submitFilter()}>
            Search
          </button>
        </Popover>
        <InputPagination
          currentPage={currentPage}
          totalResultNum={totalResultNum}
          movieCount={movies.length}
          handleChangePage={handleChangePage}
        />
      </div>
      {movies && movies.length > 0 ? (
        <Grid className="main_movies" container item xs={12}>
          {onTabletMode && (
            <MovieModal
              isOpen={isOpen}
              movie={movieContent}
              handleClose={() => {
                setIsOpen(false);
              }}
              onTabletMode={onTabletMode}
            />
          )}
          <div className="main_movies__list">
            <MovieList
              onTabletMode={onTabletMode}
              onPhoneMode={onPhoneMode}
              movies={movies}
              onClickIndex={onClickIndex}
              fetchMovieById={fetchMovieById}
              movieContent={movieContent}
              handleOpenDetail={handleOpenDetail}
              isOpen={isOpen}
            />
          </div>
        </Grid>
      ) : (
        <div className="main_noResult">
          <div>No Movie Found for {searchValueBackup} !</div>
          <div>Type: {currentType ? currentType : "any"} </div>
          <div>Release Year: {selectedYear ? selectedYear : "any"}</div>
        </div>
      )}
    </div>
  );
};
