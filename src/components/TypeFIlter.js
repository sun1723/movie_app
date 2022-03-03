import "../utils/type_filter.scss";

export const TypeFilter = ({ title, isSelected, handleOnClick }) => {
  return (
    <div
      className={isSelected ? "type active" : "type"}
      onClick={() => {
        handleOnClick();
      }}
    >
      {title}
    </div>
  );
};
