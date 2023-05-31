import styled from "styled-components";

export const Container = styled.button`
  width: 14.1rem;
  padding: 1.2rem 2.4rem;

  background-color: #c1dcdc;
  border: none;
  border-radius: 0.8rem;

  align-items: center;
  float: right;

  transition: transform 0.3s, box-shadow 0.3s, color 0.3s;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: white;
  }

  @media (max-width: 600px) {
    float: none;
  }
`;

export const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;
`;
