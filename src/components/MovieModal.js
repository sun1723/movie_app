import { MovieContent } from "./MovieContent";
import "../utils/modal.scss";
import { useEffect, useState } from "react";

export const MovieModal = ({ handleAddSaved, movie, isOpen, handleClose, onTabletMode, savedMap }) => {
  const [isSaved, setIsSaved] = useState(false);
  
  useEffect(() => {
    checkSaved();
  },[movie])

  /**
   * checkSaved: check movie is saved or not
   */
  const checkSaved = () => {
    if(movie && savedMap[movie.imdbID]){
      //exist
      setIsSaved(true);
    }else{
      setIsSaved(false)
    }
  }

  return (
    <>
      {isOpen && (
        <div className="modal-box">
          <MovieContent
            movie={movie}
            handleClose={handleClose}
            onTabletMode={onTabletMode}
            handleAddSaved={handleAddSaved}
            isSaved={isSaved}
          />
        </div>
      )}
    </>
  );
};
