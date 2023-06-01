import styled from "styled-components";

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

export const SearchButton = styled.button`
  height: 4.8rem;
  width: 4.8rem;

  margin: 0.8rem 0.8rem 0.8rem 0;

  background-color: #c1dcdc;
  border: none;
  border-radius: 1.2rem;

  cursor: pointer;
`;

export const ButtonIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;
