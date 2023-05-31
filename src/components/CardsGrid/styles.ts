import styled from "styled-components";

export const CardsContainer = styled.div`
  max-width: 100%;

  margin-bottom: 10.2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 4.5rem;
  column-gap: 20rem;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 830px) {
    grid-template-columns: 1fr;
  }
`;
