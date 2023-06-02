import {
  ButtonIcon,
  FilterButton,
  Select,
  SelectContainer,
  SelectOption,
} from "./styles";

const SelectInput = ({ onOptionChange, options, placeholder }: any) => {
  return (
    <SelectContainer>
      <FilterButton>
        <ButtonIcon src="/DownArrow.svg" />
      </FilterButton>

      <Select onChange={onOptionChange}>
        <SelectOption value="">{placeholder}</SelectOption>
        {options &&
          options.map((option: any) => (
            <SelectOption value={option} key={option}>
              {option[0].toUpperCase() + option.slice(1)}
            </SelectOption>
          ))}
      </Select>
    </SelectContainer>
  );
};

export default SelectInput;
