import {
  AboutCardImage,
  AboutCardSubtitle,
  AboutCardTitle,
  Container,
} from "./styles";

interface AboutCardProps {
  source: string;
  title: string;
  subtitle: string;
}

const AboutCard = ({ source, title, subtitle }: AboutCardProps) => {
  return (
    <Container>
      <AboutCardImage src={"/" + source + ".svg"} alt={source + "icon"} />
      <AboutCardTitle>{title}</AboutCardTitle>
      <AboutCardSubtitle>{subtitle}</AboutCardSubtitle>
    </Container>
  );
};

export default AboutCard;
