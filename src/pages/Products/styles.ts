import styled from "styled-components";

export const Screen = styled.div`
  width: 100vw;
  max-width: 100%;
`;

export const Container = styled.div`
  max-width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5.5rem 6rem 5.7rem 6.8rem;

  @media (max-width: 1075px) {
    flex-direction: column;
    gap: 3rem;

    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 0;
  }
`;

export const SearchBar = styled.input`
  width: 100%;

  color: #1e1e1e80;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;
  text-align: left;

  border: none;
  background-color: transparent;

  padding: 1.8rem 0rem 1.9rem 1.8rem;

  &:focus {
    outline: none;
  }

  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;

  width: 44.9rem;
  height: 6.4rem;

  border: 0.1rem solid #c1dcdc;
  border-radius: 1.2rem;

  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const FieldButton = styled.button`
  height: 4.8rem;
  width: 4.8rem;

  margin: 0.8rem 0.8rem 0.8rem 0;

  background-color: #c1dcdc;
  border: none;
  border-radius: 1.2rem;

  cursor: pointer;
`;

export const Select = styled.select`
  appearance: none;
  outline: none;
  border: none;
  background-color: transparent;

  width: 100%;

  color: #1e1e1e80;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;
  text-align: left;

  padding: 1.8rem 0rem 1.9rem 1.8rem;

  cursor: pointer;

  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

export const SelectOption = styled.option`
  color: #1e1e1e80;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;
  text-align: left;

  padding: 1.8rem 0rem 1.9rem 1.8rem;
`;

export const FilterButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  height: 4.8rem;
  width: 4.8rem;

  margin: 0.8rem 0.8rem 0.8rem 0;

  background-color: #c1dcdc;
  border: none;
  border-radius: 1.2rem;

  cursor: pointer;
  pointer-events: none;
`;

export const ButtonIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  position: relative;

  width: 44.9rem;
  height: 6.4rem;

  border: 0.1rem solid #c1dcdc;
  border-radius: 1.2rem;

  cursor: pointer;

  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4.8rem;
  text-align: center;

  margin-bottom: 6.7rem;
`;
