import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  padding: 1.6rem 1.8rem;

  background-color: transparent;
  border-radius: 1.2rem;
  border: 0.1rem solid #c1dcdc;

  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;
  text-align: left;

  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  &:focus {
    transform: scale(1.02);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;
