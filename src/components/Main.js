import { useEffect, useState } from "react";
import { MovieList } from "./MovieList";
import { MovieModal } from "./MovieModal";
import "../utils/main.scss";
import { InputPagination } from "./InputPagination";
import { TypeFilterList } from "./TypeFilterList";
import FilterListIcon from "@material-ui/icons/FilterList";
import Popover from "@material-ui/core/Popover";
import { FilterItem } from "./FilterItem";
import { yearList } from "../utils/app_constant";
import { SelectYear } from "./SelectYear";
import { Settings } from "./Settings";
import { Tooltip } from "./Tooltip";

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
  selectedSeason,
  openSettings,
  handleBack,
  savedList,
  savedMap,
  handleAddSaved
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
    <>
    {!openSettings.saved.value && !openSettings.account.value ?
      <div className="main">
        <div className="main_type">
          <TypeFilterList
            selectedType={currentType}
            handleOnChangeType={handleOnChangeType}
            totalSeasons={totalSeasons}
          />
          <div className="main_info">
            Release : {selectedYear ? selectedYear : "any"}
          </div>
          <div className="main_info" id="search">
            Key: {searchValueBackup ? searchValueBackup : "-"}
          </div>
        </div>
        {currentType == "season" && (
          <div className="main_seasons">{menuList}</div>
        )}
        <div className="main_result">
          <Tooltip content="Open Filter">
            <span>
              <FilterListIcon
                id={Boolean(anchorEl) ? "filter" : undefined}
                className="main_result__icon"
                fontSize="small"
                onClick={(evt) => {
                  handleOpenFilter(evt);
                }}
              />
            </span>
          </Tooltip>
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
                <SelectYear
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
                      className="popover_input"
                      onChange={(evt) => {
                        setStart(evt.currentTarget.value);
                      }}
                    />
                    -<span>max</span>
                    <input
                      className="popover_input"
                      onChange={(evt) => {
                        setEnd(evt.currentTarget.value);
                      }}
                    />
                  </>
                }
              />
            )}
            <button className="filter_search" id="filter_search" onClick={() => submitFilter()}>
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
          <div className="main_movies" >
            {onTabletMode && (
              <MovieModal
                isOpen={isOpen}
                movie={movieContent}
                handleClose={() => {
                  setIsOpen(false);
                }}
                onTabletMode={onTabletMode}
                handleAddSaved={handleAddSaved}
                savedMap={savedMap}
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
                handleAddSaved={handleAddSaved}
                handleOpenDetail={handleOpenDetail}
                isOpen={isOpen}
                savedMap={savedMap}
              />
            </div>
          </div>
        ) : (
          <div className="main_noResult">
            <div>{searchValueBackup ? `No Movie Found for ${searchValueBackup} !` : "Please Type in Search Key !"}</div>
            <div>Type: {currentType ? currentType : "any"} </div>
            <div>Release Year: {selectedYear ? selectedYear : "any"}</div>
          </div>
        )}
      </div>
      :
        <Settings 
          savedList={savedList}
          handleBack={handleBack} 
          settings={openSettings} 
          onTabletMode={onTabletMode}
          onPhoneMode={onPhoneMode}
          onClickIndex={onClickIndex}
          fetchMovieById={fetchMovieById}
          movieContent={movieContent}
          handleOpenDetail={handleOpenDetail}
          isOpen={isOpen}
          savedMap={savedMap}
          handleAddSaved={handleAddSaved}/>
      }
    </>
  );
};
