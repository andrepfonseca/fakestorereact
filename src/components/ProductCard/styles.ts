import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  width: 30rem;

  border-radius: 1.2rem;
  padding: 2rem;

  text-decoration: none;
  color: #000000;

  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 400px) {
    max-width: 50vw;
  }
`;

export const Container = styled.div`
  @media (max-width: 400px) {
    max-width: 100%;
  }
`;

export const ImageContainer = styled.div`
  height: 36.3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    max-height: 50vh;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  width: auto;
  max-height: 36.3rem;

  border-radius: 1.2rem;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;
  text-align: left;

  margin-top: 1.2rem;
`;

export const Price = styled.p`
  color: #1e1e1e80;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;
  text-align: left;

  margin-top: 0.7rem;
`;
