import "../utils/type_filter.scss";

export const TypeFilter = ({ title, isSelected, handleOnClick }) => {

  return (
    <>
      <div
        id={title}
        className={isSelected ? "type active" : "type"}
        onClick={(evt) => {
            handleOnClick();
        }}
      >
        {title}
      </div>
    </>
  );
};
