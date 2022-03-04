import { MovieContent } from "./MovieContent";
import "../utils/modal.scss";

export const MovieModal = ({ handleAddSaved, movie, isOpen, handleClose, onTabletMode, savedMap }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-box">
          <MovieContent
            movie={movie}
            handleClose={handleClose}
            onTabletMode={onTabletMode}
            handleAddSaved={handleAddSaved}
            savedMap={savedMap}
          />
        </div>
      )}
    </>
  );
};
