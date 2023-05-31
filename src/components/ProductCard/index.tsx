import {
  Container,
  Image,
  ImageContainer,
  LinkStyled,
  Price,
  Title,
} from "./styles";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  id: number;
}

const ProductCard = ({ title, price, image, id }: ProductCardProps) => {
  return (
    <LinkStyled to={`/products/${id}`}>
      <Container>
        <ImageContainer>
          <Image src={image} alt="Product Image" />
        </ImageContainer>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </Container>
    </LinkStyled>
  );
};

export default ProductCard;
