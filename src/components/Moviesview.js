import { useEffect, useState } from "react";
import "../utils/movie_view.scss";
import { getMoviesByidOrTitle, getMoviesBySearch } from "../api/MovieApi";
import { Nav } from "./Nav";
import { types } from "../utils/app_constant";
import { Main } from "./Main";

export const Moviesview = () => {
  const [searchValueBackup, setSearchValueBackup] = useState("");
  const [movieContent, setMovieContent] = useState(null);

  const [onClickIndex, setOnClickIndex] = useState(0);
  const [movies, setMovies] = useState([]);
  const [resultNum, setResultNum] = useState(0);
  const [onTabletMode, setOnTabletMode] = useState(false);
  const [onPhoneMode, setOnPhoneMode] = useState(false);
  const [selectedMovieType, setSelectedMovieType] = useState("");
  const [selectedMovieTypeBackup, setSelectedMovieTypeBackup] = useState(selectedMovieType);
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [totalSeasons, setTotalSeasons] = useState("");
  const [openSettings, setOpenSettings] = useState({
    saved: {name: "Saved" , value: false},
    account: {name: "Account", value: false},
  });
  const [savedList, setSavedList] = useState([]);
  const [savedMap, setSavedMap] = useState({});

  useEffect(() => {
    windowResize();
  }, []);

  useEffect(() => {
    if (searchValueBackup.length >= 3) fetchMovies();
  }, [
    selectedMovieType,
    searchValueBackup,
    selectedPage,
    selectedYear,
    selectedSeason,
  ]);

  useEffect(() => {
    window.addEventListener("resize", windowResize);
  });

  /**
   * handleOpenSettings: handle open settings page
   */
  const handleOpenSettings = (label, val) => {
    let temp = {
      saved: {name: "Saved" , value: false},
      account: {name: "Account", value: false},
    }
    if(label == 'saved')
      temp['saved'].value = val;
    else if(label == 'account')
      temp['account'].value = val;
    setOpenSettings(temp);
  }

  /**
   * handleAddSaved:handle add Movie/episode/series to savedList
   */
  const handleAddSaved = (movie) => {
    let is_existed=false
    //check if it is already in savedList
    for(let i =0; i<savedList.length; i++){
      if(savedList[i].imdbID == movie.imdbID){
        //already exist
        is_existed = true
      }
    }
    if(!is_existed)
    {
      let list  = savedList;
      let temp = {};
      let m = savedMap;
      temp['imdbID'] = movie.imdbID;
      temp['Title']=movie.Title;
      temp['Type'] = movie.Type
      temp['Episode'] = movie.Episode ? movie.Episode : '';
      temp['Year'] = movie.Year;
      list.push(temp);
      setSavedList(list);
      m[movie.imdbID] = {isSelected: true};
      setSavedMap(m);
    }else{
      delete savedMap[movie.imdbID];
      setSavedList(savedList.filter(it => it.imdbID != movie.imdbID))
    }
  }

  /**
   * handleChangePage: handle change page for movies
   */
  const handleChangePage = (page) => {
    setSelectedPage(page);
  };

  /**
   * handleChangeYear: handle change year for movies
   */
  const handleChangeYear = (year) => {
    if (year.start == year.end || !(year.start != "" && year.end != ""))
      setSelectedYear(year.start ? year.start : year.end);
    else if (year.start != "" && year.end != "") {
      let y = `${year.start}-${year.end}`;
      setSelectedYear(y);
    }
  };

  /**
   * windowResize: handle window resize
   */
  const windowResize = () => {
    if (window.innerWidth <= 600) {
      setOnPhoneMode(true);
      setOnTabletMode(false);
    } else {
      setOnPhoneMode(false);
      setOnTabletMode(true);
    }
  };

  /**
   * fetchMovieByTitle: fetch movie by title
   */
  const fetchMovieByTitle = () => {
    getMoviesByidOrTitle({
      title: searchValueBackup,
      season: selectedSeason,
      year: selectedYear,
    }).then((res) => {
      const data = res.data;
      if (data.Response == "True") {
        setMovies(data.Episodes);
        setTotalSeasons(data.totalSeasons);
      }
    });
  };

  /**
   * fetchMovieById: fetch movie by id
   */
  const fetchMovieById = (onClickId, index) => {
    getMoviesByidOrTitle({
      id: onClickId,
    }).then((res) => {
      const data = res.data;
      if (data.Response) setMovieContent(data);
      setOnClickIndex(index);
    });
  };

  /**
   * fetchMovies : fetch movies from api
   */
  const fetchMovies = () => {
    if (
      !searchValueBackup ||
      (selectedYear < 1900 && selectedYear != 0) ||
      selectedYear > 2050
    ) {
      return;
    }
    if (selectedMovieType == "season") {
      fetchMovieByTitle();
      return;
    }
    getMoviesBySearch({
      search: searchValueBackup,
      type: selectedMovieType == "any" ? "" : selectedMovieType,
      page: selectedPage,
      year: selectedYear,
    })
      .then((res) => {
        const data = res.data;
        if (data.Response == "True") {
          setMovies(data.Search);
          // setMovieContent(data.Search ? data.Search[0] : null);
          setOnClickIndex(-1);
          setResultNum(data.totalResults);
        } else {
          setMovies([]);
          console.log("MovieView Error: ", data.Error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  /**
   * handleOnSearchClick: handle event when click search
   */
  const handleOnSearchClick = (val) => {
    fetchMovies(val);
    setSearchValueBackup(val);
    setSelectedMovieType(selectedMovieTypeBackup);
    resetAfterSearch();
  };

  /**
   * resetAfterSearch: reset variables after search
   */
  const resetAfterSearch = () => {
    setSelectedPage(1);
    setOpenSettings({account: {name:"Account" ,value: false}, saved: {name:"Saved" ,value: false}});
  };

  /**
   * handleOnChangeType: handle change type by radio input
   */
  const handleOnChangeType = (type) => {
    setSelectedMovieType(type);
    setSelectedMovieTypeBackup(type);
  };

  /**
   * handleOnChangeSeason
   */
  const handleOnChangeSeason = (season) => {
    setSelectedSeason(season);
  };

  return (
    <div
      className="view"
    >
      <div className="nav">
        <Nav
          handleOnSearchClick={handleOnSearchClick}
          handleOpenSettings={handleOpenSettings}
        />
      </div>
      <div className="main">
        <Main
          handleAddSaved={handleAddSaved}
          fetchMovieById={fetchMovieById}
          onTabletMode={onTabletMode}
          onPhoneMode={onPhoneMode}
          movies={movies}
          searchValueBackup={searchValueBackup}
          onClickIndex={onClickIndex}
          movieContent={movieContent}
          currentPage={selectedPage}
          totalResultNum={resultNum}
          selectedYear={selectedYear}
          handleChangePage={handleChangePage}
          currentType={selectedMovieTypeBackup}
          handleChangeYear={handleChangeYear}
          handleOnChangeType={handleOnChangeType}
          handleOnChangeSeason={handleOnChangeSeason}
          totalSeasons={totalSeasons}
          selectedSeason={selectedSeason}
          openSettings={openSettings}
          handleBack={handleOpenSettings}
          savedMap={savedMap}
          savedList={savedList}
        />
      </div>
    </div>
  );
};
