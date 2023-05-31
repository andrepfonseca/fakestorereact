import {
  Container,
  Info,
  InfoTitle,
  InfoDescription,
  IconContainer,
  Icon,
  MapSection,
  MapSectionTitle,
  MapSectionItem,
  Rights,
  SiteMap,
  TopContainer,
} from "./styles";

function Footer() {
  return (
    <Container>
      <TopContainer>
        <Info>
          <InfoTitle>GREENMIND</InfoTitle>

          <InfoDescription>We help you find your dream plant</InfoDescription>

          <IconContainer>
            <Icon src="/Facebook.svg" />
            <Icon src="/Instagram.svg" />
            <Icon src="/Twitter.svg" />
          </IconContainer>
        </Info>

        <SiteMap>
          <MapSection>
            <MapSectionTitle>Information</MapSectionTitle>
            <MapSectionItem>About</MapSectionItem>
            <MapSectionItem>Product</MapSectionItem>
            <MapSectionItem>Blog</MapSectionItem>
          </MapSection>

          <MapSection>
            <MapSectionTitle>Company</MapSectionTitle>
            <MapSectionItem>Community</MapSectionItem>
            <MapSectionItem>Career</MapSectionItem>
            <MapSectionItem>Our story</MapSectionItem>
          </MapSection>

          <MapSection>
            <MapSectionTitle>Contact</MapSectionTitle>
            <MapSectionItem>Getting Started</MapSectionItem>
            <MapSectionItem>Pricing</MapSectionItem>
            <MapSectionItem>Resources</MapSectionItem>
          </MapSection>
        </SiteMap>
      </TopContainer>

      <Rights>2023 all Right Reserved Term of use GREENMIND</Rights>
    </Container>
  );
}

export default Footer;
