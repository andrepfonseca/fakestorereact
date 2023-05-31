import styled from "styled-components";

export const AboutCardImage = styled.img`
  margin-top: 2.8rem;
`;

export const AboutCardSubtitle = styled.p`
  color: #1e1e1e80;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;

  margin-top: 1.2rem;
`;

export const AboutCardTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.7rem;

  margin-top: 2.4rem;
`;

export const Container = styled.div`
  width: 40rem;
  height: 21.3rem;

  margin-bottom: 9.1rem;

  @media (max-width: 420px) {
    max-width: 60vw;
  }
`;
