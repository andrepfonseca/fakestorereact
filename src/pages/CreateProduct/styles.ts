import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 6.6rem;
  margin-top: 6.6rem;
  padding-left: 1rem;
  padding-right: 4rem;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4.8rem;
  text-align: center;

  margin-bottom: 3.7rem;
`;

export const Form = styled.div`
  width: 80rem;

  @media (max-width: 940px) {
    width: 80%;
  }
`;

export const Fields = styled.div``;

export const Label = styled.label`
  color: #1e1e1e80;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;
  text-align: left;
`;
