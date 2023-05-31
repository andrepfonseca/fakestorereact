import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 12rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #c1dcdc;

  @media (max-width: 900px) {
    box-sizing: border-box;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  @media (max-width: 900px) {
    display: block;
  }
`;

export const Title = styled.h1`
  font-family: "Abhaya Libre";
  font-size: 2.4rem;
  text-transform: uppercase;

  font-weight: 400;

  margin-left: 9.6rem;

  @media (max-width: 900px) {
    margin-left: 0;
  }
  transition: 0.3s color, 0.3s text-shadow;

  &:hover {
    text-shadow: 1px 1px 2px black;
    color: white;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #1e1e1e;
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: 1100px) {
    display: none;
  }

  transition: 0.3s color, 0.3s text-shadow;

  &:hover {
    text-shadow: 1px 1px 2px black;
    color: white;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 4.8rem;

  margin-left: 10.7rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 4.8rem;

  margin-right: 9.6rem;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Icon = styled.img`
  max-width: 2.4rem;
  min-height: 2.4rem;

  cursor: pointer;
  transition: 0.3s box-shadow;

  &:hover {
    box-shadow: 0px 0px 5px white;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background: none;
  border: none;

  cursor: pointer;

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const Hamburguer = styled.div`
  height: 0.3rem;
  width: 2rem;

  background-color: #1e1e1e;
`;

export const MenuList = styled.ul`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  bottom: 0;

  list-style-type: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  background-color: #c1dcdc;
  z-index: 99;

  margin-top: 20rem;
`;

export const MenuListItem = styled.li`
  max-width: 100%;
`;

export const MenuListItemLink = styled.a`
  color: #1e1e1e;
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;

  transition: 0.3s color, 0.3s font-size, 0.3s text-shadow;

  &:hover {
    text-shadow: 1px 1px 2px black;
    color: white;
    font-size: 2.5rem;
  }
`;

export const CloseMenuButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;

  font-size: 2.5rem;
  font-weight: 700;
  color: #1e1e1e;

  position: absolute;
  top: 3rem;
  right: 3rem;

  transition: 0.3s color, 0.3s font-size, 0.3s text-shadow;

  &:hover {
    text-shadow: 1px 1px 2px black;
    color: white;
    font-size: 2.5rem;
  }
`;
