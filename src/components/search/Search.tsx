import { SearchIcon } from "../../../public/Images";
import { InputSearch, LabelSearch, SearchIconStyle } from "./search.styled";

const Search = () => {
  return (
    <LabelSearch>
      <SearchIconStyle src={SearchIcon.img} alt={SearchIcon.name} />
      <InputSearch type="text" placeholder="search anything" />
    </LabelSearch>
  );
};

export default Search;
