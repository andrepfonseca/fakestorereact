import styled from "styled-components";

export const SelectContainer = styled.div`
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
