import "../utils/input_pagination.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export const InputPagination = ({
  currentPage,
  totalResultNum,
  handleChangePage,
  movieCount
}) => {
  const totalPage = movieCount ? Math.floor(totalResultNum / 10) + 1 : 1;
  const backPage = parseInt(currentPage) - 1;
  const forwardPage = parseInt(currentPage) + 1;
  const start = currentPage ? (currentPage - 1) * 10 + 1 : 1;
  const end = currentPage
    ? currentPage * 10 < totalResultNum
      ? currentPage * 10
      : totalResultNum
    : 10;

  return (
    <div className="input-pagination">
      <span className="input-text">
        {movieCount ? start : 0} - {movieCount ? end : 0} Results
      </span>
      <span className="icon">
        <ArrowBackIosIcon
          style={{
            color:
              currentPage == 1 || currentPage == ""
                ? "rgba(255,255,255,0.4)"
                : "#fff",
          }}
          onClick={(evt) => {
            if (currentPage == 1) return;
            handleChangePage(backPage);
          }}
        />
      </span>
      <input
        placeholder={currentPage}
        value={movieCount ? currentPage : 1}
        onChange={(evt) => {
          if (evt.currentTarget.value > totalPage) return;
          handleChangePage(evt.currentTarget.value);
        }}
      />
      <span className="input-text"> / {totalPage}</span>
      <span className="icon">
        <ArrowForwardIosIcon
          style={{
            color: currentPage == totalPage ? "rgba(255,255,255,0.4)" : "#fff",
          }}
          onClick={(evt) => {
            if (currentPage == totalPage) return;
            handleChangePage(forwardPage);
          }}
        />
      </span>
    </div>
  );
};
