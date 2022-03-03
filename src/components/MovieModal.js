import { MovieContent } from "./MovieContent";
import "../utils/modal.scss";

export const MovieModal = ({ movie, isOpen, handleClose, onTabletMode }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-box">
          <MovieContent
            movie={movie}
            handleClose={handleClose}
            onTabletMode={onTabletMode}
          />
        </div>
      )}
    </>
  );
};
