import { FilterItem } from "./FilterItem";
import { yearList } from "../utils/app_constant";
import { MenuList } from "./MenuList";

export const YearSelect = ({ handleChangeYear, selectedYear }) => {
  return (
    <FilterItem
      title="Year"
      content={
        <MenuList
          options={yearList()}
          handleChangeYear={handleChangeYear}
          selectedYear={selectedYear}
        />
      }
    />
  );
};
