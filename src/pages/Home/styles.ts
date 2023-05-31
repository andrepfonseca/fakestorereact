import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const BestSellingContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 4.7rem 9.6rem 5rem 9.4rem;

  @media (max-width: 1315px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const SectionDescriptionContainer = styled.div`
  max-width: 25.6rem;
`;

export const SectionTitle = styled.h1`
  text-align: left;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4.8rem;

  margin: 0;
`;

export const SectionDescription = styled.p`
  color: #1e1e1e80;
  text-align: left;
  font-size: 1.8rem;
  font-weight: 500;

  margin-top: 1.2rem;
`;

export const ProductsContainer = styled.div`
  display: flex;
  gap: 4.8rem;

  margin-left: 2.4rem;

  @media (max-width: 1315px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const AboutSection = styled.div`
  background-color: #c1dcdc;
  padding-top: 7.4rem;
`;

export const AboutTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4.8rem;
`;

export const AboutSubtitle = styled.p`
  color: #1e1e1e80;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;

  margin-top: 1.2rem;
`;

export const AboutCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  margin-top: 4.8rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const CategoriesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 5.4rem;

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CategoriesTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4.8rem;

  margin-top: 8.5rem;
`;

export const CategoriesSubtitle = styled.p`
  color: #1e1e1e80;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;

  margin-top: 1.2rem;
`;

export const CategoriesCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9.6rem;

  margin-top: 5.9rem;

  @media (max-width: 1300px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const ExportButton = styled.button`
  display: flex;
  align-items: center;

  border: 0;
  background: none;

  padding-top: 1.2rem;
  padding-bottom: 1.2rem;

  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;

  margin-top: 2.4rem;

  cursor: pointer;
`;
