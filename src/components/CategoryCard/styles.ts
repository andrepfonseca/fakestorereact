import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  width: 35.2rem;
  padding: 2rem;

  text-decoration: none;
  color: black;

  cursor: pointer;

  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 420px) {
    max-width: 60vw;
  }
`;

export const Image = styled.img`
  width: auto;
  border-radius: 1.2rem;
  @media (max-width: 420px) {
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.7rem;

  margin-top: 1.2rem;
`;
