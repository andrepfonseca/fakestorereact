import styled from "styled-components";

export const Container = styled.div`
  padding: 4.8rem 9.6rem;

  background-color: #c1dcdc;

  @media (max-width: 400px) {
    max-width: 100%;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;

    gap: 3rem;
  }
`;

export const Info = styled.div`
  max-width: 19.2rem;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.9rem;
  text-align: left;
`;

export const InfoDescription = styled.p`
  margin-top: 2.4rem;

  color: #1e1e1e80;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;
  text-align: left;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 2.4rem;

  margin-top: 2.4rem;
`;

export const Icon = styled.img`
  max-width: 4.8rem;
  max-height: 4.8rem;

  cursor: pointer;
`;

export const SiteMap = styled.div`
  display: flex;
  gap: 4.8rem;

  @media (max-width: 900px) {
    padding-left: 2rem;
    padding-right: 2rem;

    gap: 2rem;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const MapSection = styled.div``;

export const MapSectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.7rem;
  text-align: left;
`;

export const MapSectionItem = styled.p`
  margin-top: 2.4rem;

  color: #1e1e1e80;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.7rem;
  text-align: left;

  cursor: pointer;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.05);
    color: #000000;
  }
`;

export const Rights = styled.p`
  margin-top: 9.8rem;

  color: #1e1e1e80;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.7rem;
  text-align: left;
`;
