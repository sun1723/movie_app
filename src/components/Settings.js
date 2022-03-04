import "../utils/settings.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useEffect, useState } from "react";
import { MovieList } from "./MovieList";
import { MovieModal } from "./MovieModal";

export const Settings = ({
  settings,
  handleBack,
  savedList,
  onClickIndex,
  fetchMovieById,
  movieContent,
  onPhoneMode,
  onTabletMode,
  handleAddSaved,
  savedMap
}) => {
  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    checkSettingTitle();
  }, [settings]);

  const checkSettingTitle = () => {
    if (settings.saved.value) {
      setTitle(settings.saved.name);
    } else if (settings.account.value) {
      setTitle(settings.account.name);
    }
  };

  const handleOpenDetail = (value) => {
    setIsOpen(value);
  };

  const content = () => {
    //page Content depend on title
    if (settings.saved.value) {
      //if it is saved page
      return (
        <div style={{ color: "#fff" }}>
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
          {savedList && 
          <MovieList
            onTabletMode={onTabletMode}
            onPhoneMode={onPhoneMode}
            movies={savedList}
            onClickIndex={onClickIndex}
            fetchMovieById={fetchMovieById}
            movieContent={movieContent}
            handleOpenDetail={handleOpenDetail}
            handleAddSaved={handleAddSaved}
            isOpen={isOpen}
            savedMap={savedMap}
            setting={true}
          />
          }
        </div>
      );
    }
    if (settings.account.value) {
      //if it is account page
      return <div>Account Settings</div>;
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
