import { TypeFilter } from "./TypeFIlter";
import { types } from "../utils/app_constant";
import "../utils/typeFilter_list.scss";

export const TypeFilterList = ({ selectedType, handleOnChangeType, totalSeasons }) => {
  const handleOnClick = (type) => {
    if (selectedType == type) {
      handleOnChangeType("");
    } else {
      handleOnChangeType(type);
    }
  };

  return (
    <div className="type-list">
      {types.map((type) => (
        <TypeFilter
          title={type}
          isSelected={selectedType == type}
          handleOnClick={() => handleOnClick(type)}
          totalSeasons={totalSeasons}
        />
      ))}
    </div>
  );
};
