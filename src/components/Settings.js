import "../utils/settings.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useEffect, useState } from "react";
import { MovieList } from "./MovieList";

export const Settings = ({
  settings,
  handleBack,
  savedList,
  onClickIndex,
  fetchMovieById,
  movieContent,
  onPhoneMode,
  onTabletMode,
  handleOpenDetail,
  isOpen,
}) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log(settings);
    checkSettingTitle();
  }, [settings]);

  const checkSettingTitle = () => {
    if (settings.saved.value) {
      setTitle(settings.saved.name);
    } else if (settings.account.value) {
      setTitle(settings.account.name);
    }
  };

  const content = () => {
    //page Content depend on title
    if (settings.saved.value) {
      //if it is saved page
      return (
        <div style={{ color: "#fff" }}>
          <MovieList
            onTabletMode={onTabletMode}
            onPhoneMode={onPhoneMode}
            movies={savedList}
            onClickIndex={onClickIndex}
            fetchMovieById={fetchMovieById}
            movieContent={movieContent}
            handleOpenDetail={handleOpenDetail}
            isOpen={isOpen}
          />
        </div>
      );
    }
    if (settings.account.value) {
      //if it is account page
      return <div>account</div>;
    }
  };

  return (
    <div className="settings">
      <div className="settings_heading">
        <ArrowBackIcon
          className="settings_heading__icon"
          onClick={() => handleBack(false)}
        />
        <div className="settings_heading__name">{title}</div>
      </div>
      <div className="settings_main">{content()}</div>
    </div>
  );
};
