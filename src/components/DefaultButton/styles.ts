import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionButton = styled(Link)`
  width: 16.8rem;
  height: 5.1rem;
  margin-top: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #c1dcdc;
  border-radius: 0.8rem;

  text-decoration: none;
  color: #1e1e1e;
  font-size: 1.8rem;
  font-style: medium;
  font-weight: 500;

  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Icon = styled.img`
  max-width: 2rem;
  max-height: 2.4rem;

  margin-left: 1rem;
`;
