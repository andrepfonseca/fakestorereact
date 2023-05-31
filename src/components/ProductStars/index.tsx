import { Container, StarsCover, StarsImage } from "./styles";

interface ProductStarsProps {
  image: string;
  rate: number;
  alt: string;
}

const ProductStars = ({ image, rate, alt }: ProductStarsProps) => {
  const calculateCoverWidth = (rate: number) => 100 - rate * 20;

  return (
    <Container>
      <StarsImage
        src={image}
        alt={"Product is rated " + alt + " out of 5 stars"}
      />
      <StarsCover style={{ width: calculateCoverWidth(rate) }} />
    </Container>
  );
};

export default ProductStars;
