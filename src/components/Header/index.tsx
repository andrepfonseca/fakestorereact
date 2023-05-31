import { useLocation } from "react-router-dom";
import { useState } from "react";

import {
  CloseMenuButton,
  Container,
  Hamburguer,
  Icon,
  IconsContainer,
  LeftContainer,
  LinkStyled,
  MenuButton,
  MenuList,
  MenuListItem,
  MenuListItemLink,
  NavContainer,
  Title,
} from "./styles";

const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <LeftContainer>
        {!isMenuOpen && <Title>Greenmind</Title>}

        <NavContainer>
          <LinkStyled
            to="/"
            style={pathname === "/" ? { color: "#1E1E1E80" } : undefined}
          >
            Home
          </LinkStyled>

          <LinkStyled
            to="/products"
            style={
              pathname === "/products" ? { color: "#1E1E1E80" } : undefined
            }
          >
            Products
          </LinkStyled>

          <LinkStyled
            to="/products/create"
            style={
              pathname === "/products/create"
                ? { color: "#1E1E1E80" }
                : undefined
            }
          >
            Create Product
          </LinkStyled>
        </NavContainer>
      </LeftContainer>

      {!isMenuOpen && (
        <MenuButton onClick={handleToggleMenu}>
          <Hamburguer></Hamburguer>
          <Hamburguer></Hamburguer>
          <Hamburguer></Hamburguer>
        </MenuButton>
      )}

      {isMenuOpen && (
        <MenuList>
          <CloseMenuButton onClick={handleToggleMenu}>X</CloseMenuButton>

          <MenuListItem>
            <MenuListItemLink href="/">Home</MenuListItemLink>
          </MenuListItem>

          <MenuListItem>
            <MenuListItemLink href="/products">Products</MenuListItemLink>
          </MenuListItem>

          <MenuListItem>
            <MenuListItemLink href="/products/create">
              Create Product
            </MenuListItemLink>
          </MenuListItem>
        </MenuList>
      )}

      <IconsContainer>
        <Icon src="/Cart.png" alt="Cart" />
        <Icon src="/Person.png" alt="Person" />
        <Icon src="/Line.png" alt="Line" />
        <Icon src="/FilterRight.png" alt="Filter" />
      </IconsContainer>
    </Container>
  );
};

export default Header;
