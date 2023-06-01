import {
  ButtonIcon,
  SearchButton,
  SearchBar,
  SearchBarContainer,
} from "./styles";

const SearchInput = ({ onInputChange, onSearchAction }: any) => {
  return (
    <SearchBarContainer>
      <SearchBar
        placeholder="Procurando por algum produto?"
        type="text"
        onChange={onInputChange}
        onKeyDown={onSearchAction}
      />
      <SearchButton onClick={onSearchAction}>
        <ButtonIcon src="/SearchIcon.svg" />
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchInput;
