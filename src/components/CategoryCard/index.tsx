import { LinkStyled, Image, Title } from "./styles";

interface CategoryCardProps {
  image: string;
  title: string;
  category: string;
}

const CategoryCard = ({ image, title, category }: CategoryCardProps) => {
  return (
    <LinkStyled to="/products" state={{ category }}>
      <Image src={image} alt={image} />
      <Title>{title}</Title>
    </LinkStyled>
  );
};

export default CategoryCard;
