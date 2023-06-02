import styled from "styled-components";

export const Screen = styled.div`
  width: 100vw;
  max-width: 100%;
`;

export const Container = styled.div`
  max-width: 100%;
`;

export const FilterContainer = styled.div`
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
