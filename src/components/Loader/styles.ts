import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: 5px solid #ccc;
  border-top-color: #000;

  animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
